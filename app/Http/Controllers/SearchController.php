<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tutor;
use App\Subject;
use App\SubjectName;
class SearchController extends Controller
{
    public function search(){
        $subject_names=SubjectName::get();
        return view('search/search',compact('subject_names'));
    }
    public function index(Request $request)
    {   
        if(!$request->price){$request->price=0;}
        $tutors=Tutor::whereHas('subject', function ($query)use ($request) {  
            $query->where('subject_name_id',$request->subject_name_id)->where('level',$request->level)->where('topic','like','%'.$request->topic.'%')->where('price','>=',$request->price);
        })->get();
        $subject_names=SubjectName::all();
        return view('search/index',compact('tutors','subject_names'));
    }
}
