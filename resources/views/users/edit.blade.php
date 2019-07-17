@extends('layouts/app')
@section('content')
<form method="post" action="{{action('UserController@update',$user->id)}}">
    @csrf
    @method('PUT')
    <div class="container">
            <div class="form-group">
                <label>age</label>
                <input type="number" name="age" class="form-control" value="{{$user->age}}">
            </div>
            <div class="form-group">
                <label>gender</label>
                <input type="text" name="gender" class="form-control" value="{{$user->gender}}">
            </div>
            <div class="form-group">
                <label>image</label>
                <input type="text" name="image" class="form-control" value="{{$user->image}}">
            </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form><br>
@endsection
