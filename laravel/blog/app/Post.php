<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';

    protected $primaryKey = 'id';

    protected $fillable = ['title', 'description'];

    public function tags()
    {
        return $this->hasMany(Tag::class, 'post_id');
    }
}
