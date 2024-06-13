<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreUserRequest extends FormRequest
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
            'first_name' => 'required|string|max:25',
            'middle_name' => 'nullable|string|max:25',
            'last_name' => 'nullable|string|max:25',
            'phone_number' => 'nullable|string|max:12|min:12|unique:users|regex:/^\+7[0-9]*$/',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'string', Password::min(6)->letters()->numbers(),]
        ];
    }
}
