<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CollectiveMetricController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\SurveyHistoryController;
use App\Http\Controllers\ValueController;
use App\Http\Controllers\MetricsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login'])->name('api.auth.login');
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

Route::group([
    'middleware' => 'auth',
], function ($router) {
    Route::get('employees', [EmployeeController::class, 'index']);
    Route::get('employees/{employee}', [EmployeeController::class, 'show']);
    Route::post('employees', [EmployeeController::class, 'store']);
    Route::put('employees/{employee}', [EmployeeController::class, 'update']);
    Route::delete('employees/{employee}', [EmployeeController::class, 'destroy']);
});

Route::group(['middleware' => 'auth'], function () {
    Route::get('companies', [CompanyController::class, 'index']);
    Route::get('companies/{company}', [CompanyController::class, 'show']); // Use 'company' instead of 'id'
    Route::post('companies', [CompanyController::class, 'store']);
    Route::put('companies/{company}', [CompanyController::class, 'update']); // Use 'company' instead of 'id'
    Route::delete('companies/{company}', [CompanyController::class, 'destroy']); // Use 'company' instead of 'id'
});


Route::group([
    'middleware' => 'api',
], function ($router) {
    Route::resource('values', ValueController::class);
});

Route::group([
    'middleware' => 'api',
], function ($router) {
Route::post('/subscriptions', [SubscriptionController::class, 'store']);
Route::post('/subscriptions/{id}/cancel', [SubscriptionController::class, 'cancel']);
});

Route::resource('events', EventController::class);

Route::resource('metrics', MetricsController::class);

Route::resource('survey_histories', SurveyHistoryController::class);

Route::resource('collective_metrics', CollectiveMetricController::class);
