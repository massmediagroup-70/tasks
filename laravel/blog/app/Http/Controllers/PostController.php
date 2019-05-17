<?php

namespace App\Http\Controllers;

use App\Post;
use App\Tag;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return view('post.index', compact('posts'));
    }

    public function create()
    {
        return view('post.create');
    }

    public function store(Request $request)
    {
        $tags = $request->get('tags');

        $requestData = $request->except('tags');
        $post = Post::create($requestData);
        if ($tags != null){
            Tag::saveArray($request->get('tags'), $post);
        }
        return redirect('/');
    }

    public function search(Request $request)
    {
        $word = $request->get('search');
        $posts = Post::join('tags', 'posts.id', '=', 'tags.post_id')
            ->select('posts.*')
            ->where('posts.title', 'like', '%'.$word.'%')
            ->orWhere('tags.name', 'like', '%'.$word.'%')
            ->groupBy('posts.id')
            ->get();
        return view('post.index', compact('posts', 'word'));
    }

}
