<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
        'genre_id' => 'required|integer|exists:genres,id',
        'type' => 'required|in:income,expense',
        'amount' => 'required|integer|min:0',
        'date' => 'required|date',
        'memo' => 'nullable|string|max:255'
        ];
    }
}
