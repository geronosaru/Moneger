<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'name' => 'required|string|max:50',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|confirmed|min:10|max:12'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => '名前を入力してください',
            'name.max' => '名前は50字以内で入力してください',
            'email.required' => 'メールを入力してください',
            'email.email' => 'メール形式で入力してください',
            'email.max' => '255字以内で入力してください',
            'password.required' => 'パスワードを入力してください',
            'password.min' => 'パスワードは10字以上12字以下で入力してください',
            'password.max' => 'パスワードは10字以上12字以下で入力してください',
        ];
    }
}
