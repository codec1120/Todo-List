@extends('todo.app')

@section('content')
<section>
    <div class="bg-dark-blue">  
        @include('todo.layouts.container')
    </div>
</section>
<script src="{{ asset('js/app.js')}}"></script>
@endsection