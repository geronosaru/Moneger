<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGenreRequest;
use App\Http\Requests\UpdateGenreRequest;
use App\Http\Resources\GenreResource;
use App\Models\Genre;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class GenreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            $user_id = env('FAKE_USER_ID');

            $default_genres = Genre::where('is_default', true)->get();
            $custome_genres = Genre::where('user_id', $user_id)->get();

            $all_genres = $default_genres->merge($custome_genres);

            return response()->json([
                'message' => 'Success to get genres.',
                'genres' => GenreResource::collection($all_genres)
            ],200);

        }catch(\Exception $e){
            Log::error("Failed to fetch genres".$e->getMessage());
            return response()->json([
                'message' => 'Failed to fetch genres...'
            ],500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGenreRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Genre $genre)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Genre $genre)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGenreRequest $request, Genre $genre)
    {
        try{
            $genre->update([
                'name' => $request->name
            ]);

            return response()->json([
                'message' => 'Success to update the genre.',
                'genre' => new GenreResource($genre)
            ]);

        }catch(\Exception $e){
            Log::error("Failed to update the genre.". $e->getMessage());
            return response()->json([
                'message' => 'Failed to update the genre.'
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Genre $genre)
    {
        try{
            $genre->delete();
            return response()->json([
                "Success to delete the genre. id =",
                'deleted_id' => $genre->id
            ]);
        }catch(\Exception $e){
            Log::error("Failed to delete the genre.".$e->getMessage());
            return response()->json([
                'message' => "Failed to delete the genre. id =". $genre->id
            ],500);
        }
    }
}
