@extends('layout.app')

@section('content')
    <div class="col-md-6 offset-md-3">
        @if(isset($word))
            <h2>Searched posts by key: '{{ $word }}'</h2>
            <a href="/" class="btn btn-primary">Show All</a>
        @endif
        <h1>Posts</h1>
        <br><br>
        @foreach($posts as $post)
            <div class="px-md-5 mx-2 border rounded">
                <h2>{{ $post->title }}</h2>
                <h4>{{ $post->description }}</h4>
            </div>
            @foreach($post->tags()->get() as $tag)
                <div class="px-md-5 mx-md-2 border rounded custom-control-inline">
                    <h4>{{ $tag->name }}</h4>
                </div>
            @endforeach
            <br>
            <br>

        @endforeach
    </div>

@stop
