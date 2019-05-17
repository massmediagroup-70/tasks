@extends('layout.app')

@section('content')
    {!! Form::open(['url' => '/', 'class' => 'form-horizontal', 'files' => true]) !!}

    <div class="form-group {{ $errors->has('title') ? 'has-error' : ''}}">
        {!! Form::label('title', 'Title', ['class' => 'col-sm-3 control-label']) !!}
        <div class="col-sm-6">
            {!! Form::text('title', null, ['class' => 'form-control']) !!}
            {!! $errors->first('title', '<p class="help-block">:message</p>') !!}
        </div>
    </div>

    <div class="form-group {{ $errors->has('description') ? 'has-error' : ''}}">
        {!! Form::label('description', 'Description', ['class' => 'col-sm-3 control-label']) !!}
        <div class="col-sm-6">
            {!! Form::textArea('description', null, ['class' => 'form-control']) !!}
            {!! $errors->first('description', '<p class="help-block">:message</p>') !!}
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-3 col-sm-3">
            {!! Form::button('Add Tag', ['class' => 'btn btn-success form-control', 'id'=>'add_comment']) !!}
        </div>
    </div>
    <div class="form-group">
    <div id="tags_module"></div>
    </div>


    <div class="form-group">
        <div class="col-sm-offset-3 col-sm-3">
            {!! Form::submit('Create', ['class' => 'btn btn-primary form-control']) !!}
        </div>
    </div>
    {!! Form::close() !!}
@stop

@section('scripts')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
    <script>
        $(document).ready(function() {
            var tags = $("#tags_module");

            var x = 0;
            $('#add_comment').click(function(e){
                tags.append('<div class="col-sm-6 offset-md-3">\n' +
                    '            <input class="form-control" name="tags[]'+
                    '" type="text" id="name="tag-\'+x+' +
                    '">\n' +
                    '            \n' +
                    '        </div>');
                x++;
            });

        });
    </script>
@stop
