<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home.page');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect('/');
})->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::post('/subscriptions', [SubscriptionController::class, 'store']);
Route::post('/subscriptions/{id}/cancel', [SubscriptionController::class, 'cancel']);


require __DIR__ . '/api.php';
