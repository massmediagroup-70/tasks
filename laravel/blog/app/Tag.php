<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';

    protected $primaryKey = 'id';

    protected $fillable = ['name', 'post_id'];

    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }
    static public function saveArray(array $tags, Post $post)
    {
        foreach ($tags as $tag_name){
            $tag = new Tag();
            $tag->name = $tag_name;
            $post->tags()->save($tag);
        }
    }
}
