<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:10|max:12'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'メールを入力してください',
            'email.email' => 'メール形式で入力してください',
            'email.max' => '255字以内で入力してください',
            'password.required' => 'パスワードを入力してください',
            'password.min' => 'パスワードは10字以上12字以下で入力してください',
            'password.max' => 'パスワードは10字以上12字以下で入力してください',
        ];
    }
}
