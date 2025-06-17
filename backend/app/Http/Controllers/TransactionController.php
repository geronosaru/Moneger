<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Http\Resources\TransactionResource;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            // $user_id = auth()->id(); 実装後変更
            $user_id = 1;
            $transactions = Transaction::find($user_id)
                ->with('genre')
                ->get();
            $total_income = Transaction::find($user_id)
                ->where('type', 'income')
                ->sum('amount');
            $total_expense = Transaction::find($user_id)
                ->where('type', 'expense')
                ->sum('amount');
            $total_assets = $total_income -$total_expense;

            return response()->json([
                'message' => 'Success to fetch transactions.',
                'transactions' => TransactionResource::collection($transactions),
                'total_assets' => $total_assets
            ]);

        }catch(\Exception $e){
            Log::error("Failed to fetch transactions...". $e->getMessage());
            return response()->json([
                'message' => 'Failed to fetch transactions.'
            ],500);
        }
    }

    /**
     * Show monthly transaction summary
     */
    public function monthly_summary(Request $request)
    {
        try{
            $month = $request->query('month');

            $user_id = 1;

            $total_income = Transaction::where('user_id', $user_id)
                ->whereMonth('date', $month)
                ->where('type', 'income')
                ->sum('amount');

            $total_expense = Transaction::where('user_id', $user_id)
                ->whereMonth('date', $month)
                ->where('type', 'expense')
                ->sum('amount');

            $total_amount = $total_income - $total_expense;

            return response()->json([
                'message' => 'Success to fetch transaction summary',
                'summary' => [
                    'total_income' => $total_income,
                    'total_expense' => $total_expense,
                    'total' => $total_amount
                ]
            ]);
        }catch(\Exception $e){
            Log::error("Failed to fetch transaction summary" . $e->getMessage());
            return response()->json([
                'message' => 'Failed to fetch transaction summary'
            ],500);
        }
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
