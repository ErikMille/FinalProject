@extends('layouts/app')
@section('content')

<div id="user" data-user="{{$user}}" data-tutor="{{$user->tutor}}"></div>
<?php 
    // if(($user)&&($user->tutor)){dd($user->tutor);}else{dd($user);}
?>
@endsection