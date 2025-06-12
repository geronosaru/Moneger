<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePhotoRequest;
use App\Http\Requests\UpdatePhotoRequest;
use App\Models\Photo;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request,Transaction $transaction)
    {
        $request->validate([
            'image' => 'required|image|max:2048',
        ]);
        try{
            if($request->hasFile('image')){
                $path = $request->file('image')->store('public/images');

                $photo = $transaction->photo()->create([
                    'image_path' => $path
                ]);
            }

            return response()->json([
                'message' => 'Success to store the image',
                'photo' => $photo
            ],201);

        }catch(\Exception $e){
            Log::error("Failed to store the image...". $e->getMessage());
            return response()->json([
                'Failed to store the image...'
            ],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Photo $photo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Photo $photo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePhotoRequest $request, Photo $photo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Photo $photo)
    {
        //
    }
}
