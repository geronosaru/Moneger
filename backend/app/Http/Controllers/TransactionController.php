<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Http\Resources\TransactionResource;
use App\Models\Transaction;
use Illuminate\Support\Facades\Log;

class TransactionController extends Controller
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
    public function store(StoreTransactionRequest $request)
    {
        try{
            $transaction = Transaction::create([
                'user_id' => 1, // OAuth導入後にauth()->id()へ変更する
                'date' => $request->date,
                'genre_id' => $request->genre_id,
                'amount' => $request->amount,
                'memo' => $request->memo,
                'type' => $request->type,
            ]);

            return response()->json([
                'message' => 'Success to store a new transaction',
                'transaction' => new TransactionResource($transaction)
            ]);

        }catch(\Exception $e){
            Log::error("Failed to store a new transaction" . $e->getMessage());
            return response()->json([
                'message' => 'Failed to store a new transaction...'
            ],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
