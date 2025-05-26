<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        try{
            $validated = $request->validated();
            if(User::where('email', $validated)->exists()){
                return response()->json([
                    'message' => 'the email already exists.'
                ], 409);
            };

            $user = User::create($validated);
            return response()->json([
                'message' => 'User registration successful.',
                'user' => $user
            ],201);
        }catch(\Exception $e){
            Log::error("Failed to store a new user.".$e->getMessage());
            return response()->json([
                'Failed to store a new user.'
            ],500);
        }
    }

    public function login(LoginRequest $request)
    {
        try{
            if(!Auth::attempt($request->validated())){
                return response()->json([
                    'message' => 'Failed to login.'
                ],401);
            }

            return response()->json([
                'message' => 'Login successful.'
            ],200);

        }catch(\Exception $e){
            Log::error("Failed to login".$e->getMessage());
            return response()->json([
                'message' => 'Failed to login'
            ],500);
        }
    }

    public function logout()
    {
        try{
            Auth::logout();
            return response()->json([
                'message' => 'Logout successful.'
            ],200);
        }catch(\Exception $e){
            Log::error("Failed to logout".$e->getMessage());
            return response()->json([
                'Failed to logout.'
            ],500);
        }
    }
}
