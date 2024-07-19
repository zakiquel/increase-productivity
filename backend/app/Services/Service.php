<?php

namespace App\Services;

use App\Http\Requests\Absenteeism\StoreRequest as AbsenteeismStoreRequest;
use App\Http\Requests\Company\StoreRequest;
use App\Http\Requests\Employee\StoreEmployeeRequest;
use App\Http\Requests\Employee\UpdateEmployeeRequest;
use App\Http\Requests\Event\UpdateRequest;
use App\Http\Resources\Absenteeism\AbsenreeismResource;
use App\Http\Resources\Absenteeism\AbsenteeismResource;
use App\Http\Resources\Company\CompanyResource;
use App\Http\Resources\Employee\EmployeeCollectionResource;
use App\Http\Resources\Employee\EmployeeResource;
use App\Http\Resources\Employee\EmployeeUpdateResource;
use App\Http\Resources\Event\EventCollectionResource;
use App\Http\Resources\Event\EventResource;
use App\Http\Resources\Metrics\MetricsCollectionResource;
use App\Http\Resources\Metrics\MetricsResource;
use App\Http\Resources\SurveyHistory\SurveyHistoryCollectionResource;
use App\Http\Resources\SurveyHistory\SurveyHistoryResource;
use App\Models\AbsenteeismRate;
use App\Models\Employee;
use App\Models\Event;
use App\Models\Metric;
use App\Models\SurveyHistory;
use App\Models\User;
use App\Models\Value;
use App\Models\Company;

use Illuminate\Support\Facades\Auth;

class Service
{
    public function store_user(array $validatedData)
    {
        $user = User::create([
            'first_name' => $validatedData['first_name'],
            'middle_name' => $validatedData['middle_name'],
            'last_name' => $validatedData['last_name'],
            'role' => $validatedData['role'],
            'email' => $validatedData['email'],
            'password' => \Illuminate\Support\Facades\Hash::make($validatedData['password']),
        ]);

        $token = \Tymon\JWTAuth\Facades\JWTAuth::fromUser($user);

        return [
            'message' => 'User successfully registered',
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ];
    }
    public function store_value(array $validatedData)
    {
        $count = Value::count();
        if ($count >= 8) {
            return response()->json(['error' => 'Maximum number of Value instances reached.'], 403);
        }

        $value = Value::create(['name' => $validatedData['name']]);

        return response()->json($value, 201);
    }

    public function update(array $data, $id){

    }

    public function store_company(\App\Http\Requests\Company\StoreRequest $request)
    {
        $user = Auth::user();

        if ($user->company) {
            return response()->json([
                'success' => false,
                'message' => 'You already have a company.'
            ], 403);
        }

        return $this->create_company($request);
    }
    private function create_company(StoreRequest $request)
    {
        $data = $request->validated();

        $data['user_id'] = auth()->id();

        $company = Company::create($data);

        return CompanyResource::make($company);
    }
    public function index_employee()
    {
        $company = \App\Models\Company::where('user_id', Auth::id())->first();
        if (!$company) {
            return response()->json(['error' => 'Company not found'], 404);
        }

        $users_employees = User::whereIn('id', Employee::where('company_id', $company->id)->pluck('user_id'))->get();

        return new EmployeeCollectionResource($users_employees);
    }
    public function show_employee($employee)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();
        if ($employee->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $user = User::where('id', $employee->user_id)->first();

        return new EmployeeResource($user);
    }
    public function store_employee(StoreEmployeeRequest $request)
    {
        $data = (object) $request->validated();

        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();

        if (!$company_id) {
            return response()->json(['error' => 'Company not found'], 404);
        }

        $new_employee = User::query()->create([
            'first_name' => $data->first_name,
            'middle_name' => $data->middle_name,
            'last_name' => $data->last_name,
            'email' => $data->email,
            'role' => $data->role,
            'password' => bcrypt($data->password),
        ]);

        Employee::query()->create([
            'company_id' => $company_id,
            'user_id' => $new_employee->id,
            'imgSrc' => $data->imgSrc,
            'salary' => $data->salary,
            'birth_date' => $data->birth_date,
            'position' => $data->position,
            'status' => $data->status,
            'date_of_hiring' => $data->date_of_hiring,
            'work_experience' => $data->work_experience,
            'balance' => $data->balance,
        ]);

        return EmployeeResource::make($new_employee);
    }
    public function update_employee(UpdateEmployeeRequest $request, Employee $employee)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();
        if ($employee->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
        $data = $request->validated();

        $employee->update($data);

        return new EmployeeUpdateResource($employee);
    }
    public function delete_employee(Employee $employee)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();
        if ($employee->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $employee->delete();

        return response()->json([
            'success' => true,
            'message' => 'Employee deleted successfully.',
        ], 200);
    }

    public function index_event()
    {
        $company = \App\Models\Company::where('user_id', Auth::id())->first();

        if (!$company) {
            return response()->json(['error' => 'Company not found'], 404);
        }

        $Events = Event::where('company_id', $company->id)->get();

        return new EventCollectionResource($Events);
    }

    public function show_event(Event $event)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();

        if ($event->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return new EventResource($event);
    }

    public function store_event(\App\Http\Requests\Event\StoreRequest $request)
    {
        $data = $request->validated();

        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();

        if (!$company_id) {
            return response()->json(['error' => 'Company not found'], 404);
        }

        $data['company_id'] = $company_id;

        $event = Event::create($data);

        return EventResource::make($event);
    }

    public function update_event(UpdateRequest $request, Event $event)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();

        if ($event->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $data = $request->validated();
        $event->update($data);

        return new EventResource($event);
    }
    public function destroy_event(Event $event)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();

        if ($event->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $event->delete();

        return response()->json([
            'success' => true,
            'message' => 'Event deleted successfully.',
        ], 200);
    }

    public function index_metric()
    {
        $metrics = Metric::all();

        return new MetricsCollectionResource($metrics);
    }

    public function store_metric(\App\Http\Requests\Metrics\StoreRequest $request)
    {
        $data = $request->validated();
        $metric = Metric::create($data);

        return MetricsResource::make($metric);
    }

    public function update_metric(\App\Http\Requests\Metrics\UpdateRequest $request, Metric $mertic)
    {
        $data = $request->validated();
        $mertic->update($data);

        return new MetricsResource($mertic);
    }

    public function destroy_metric(Metric $mertic)
    {
        $mertic->delete();

        return response()->json([
            'success' => true,
            'message' => 'Metric deleted successfully.',
        ], 200);
    }

    public function index_survey_history()
    {
        $company = \App\Models\Company::where('user_id', Auth::id())->first();

        if (!$company) {
            return response()->json(['error' => 'You have no company'], 404);
        }

        $employees = Employee::where('company_id', $company->id)->get();

        if (!$employees) {
            return response()->json(['error' => 'You have no employees'], 404);
        }

        $employees_id = Employee::where('company_id', $company->id)->pluck('id');

        $survey_history = SurveyHistory::whereIn('employee_id', $employees_id);

        if (!$survey_history) {
            return response()->json(['error' => 'Survey history not found'], 404);
        }

        $max_date = SurveyHistory::whereIn('employee_id', $employees_id)
            ->max('survey_date');

        $previous_date = SurveyHistory::whereIn('employee_id', $employees_id)
            ->where('survey_date', '<', $max_date)
            ->orderBy('survey_date', 'DESC')
            ->pluck('survey_date')
            ->first();

        if (!$previous_date) {
            return response()->json(['error' => 'There is no dynamic'], 404);
        }

// first metric calculating
        $avg_metric_1_mark = SurveyHistory::whereIn('employee_id', $employees_id)
            ->where('survey_date', $max_date)
            ->avg('metric_1_mark');
        $avg_metric_1_mark /= 0.12;

        $previous_avg_metric_1_mark = SurveyHistory::whereIn('employee_id', $employees_id)
            ->where('survey_date', $previous_date)
            ->avg('metric_1_mark');
        $previous_avg_metric_1_mark /= 0.12;

        $diff_1 = round(($avg_metric_1_mark - $previous_avg_metric_1_mark), 0);

// second metric calculating
        $avg_metric_2_mark = SurveyHistory::whereIn('employee_id', $employees_id)
            ->where('survey_date', $max_date)
            ->avg('metric_2_mark');
        $avg_metric_2_mark /= 0.12;

        $previous_avg_metric_2_mark = SurveyHistory::whereIn('employee_id', $employees_id)
            ->where('survey_date', $previous_date)
            ->avg('metric_1_mark');
        $previous_avg_metric_2_mark /= 0.12;

        $diff_2 = round(($avg_metric_2_mark - $previous_avg_metric_2_mark), 0);

// third metric calculating
        $avg_metric_3_mark = SurveyHistory::whereIn('employee_id', $employees_id)
            ->where('survey_date', $max_date)
            ->avg('metric_2_mark');
        $avg_metric_3_mark /= 0.12;

        $previous_avg_metric_3_mark = SurveyHistory::whereIn('employee_id', $employees_id)
            ->where('survey_date', $previous_date)
            ->avg('metric_1_mark');
        $previous_avg_metric_3_mark /= 0.12;

        $diff_3 = round(($avg_metric_3_mark - $previous_avg_metric_3_mark), 0);

        $avg_metric_1_mark = round($avg_metric_1_mark, 0);
        $avg_metric_2_mark = round($avg_metric_2_mark, 0);
        $avg_metric_3_mark = round($avg_metric_3_mark, 0);

// getting metrics names
        $metric_1_name = Metric::where('id', 1)->pluck('name')->first();
        $metric_2_name = Metric::where('id', 2)->pluck('name')->first();
        $metric_3_name = Metric::where('id', 3)->pluck('name')->first();

        $stat_collection = collect([

        ]);

        $last_survey_history = SurveyHistory::whereIn('employee_id', $employees_id)
            ->where('survey_date', $max_date)
            ->get();

        $survey_collection = new SurveyHistoryCollectionResource($last_survey_history);

        return response()->json([
            'survey_history' => $survey_collection,
            'statistic' => [
                'syrvey_date' => $max_date,
                'metric_1' =>[
                    'metric_name' => $metric_1_name,
                    'avg_metric_mark' => $avg_metric_1_mark."%",
                    'differences' => $diff_1."%",
                ],
                'metric_2' =>[
                    'metric_name' => $metric_2_name,
                    'avg_metric_mark' => $avg_metric_2_mark."%",
                    'differences' => $diff_2."%",
                ],
                'metric_3' =>[
                    'metric_name' => $metric_3_name,
                    'avg_metric_mark' => $avg_metric_3_mark."%",
                    'differences' => $diff_3."%",
                ],
            ],
        ]);
    }

    public function store_survey_history(\App\Http\Requests\SurveyHistory\StoreRequest $request)
    {
        $data = $request->validated();

        $company = \App\Models\Company::where('user_id', Auth::id())->first();

        if (!$company) {
            return response()->json(['error' => 'Create company first'], 404);
        }

        $employee = Employee::where('id', $data['employee_id'])->first();

        if (!$employee) {
            return response()->json(['error' => 'Create employee first'], 404);
        }

        $risk_1_coef = (float) Metric::where('id', 1)->value('coefficient');

        $risk_2_coef = (float) Metric::where('id', 2)->value('coefficient');

        $risk_3_coef = (float) Metric::where('id', 3)->value('coefficient');

        $metric_1_coef[1] = 0.8;
        $metric_1_coef[2] = 0.8;
        $metric_1_coef[3] = 0.7;
        $metric_1_coef[4] = 0.5;
        $metric_1_coef[5] = 0.5;
        $metric_1_coef[6] = 0.3;
        $metric_1_coef[7] = 0.3;
        $metric_1_coef[8] = 0.1;
        $metric_1_coef[9] = 0.1;
        $metric_1_coef[10] = 0;
        $metric_1_coef[11] = 0;
        $metric_1_coef[12] = 0;

        $metric_2_3_coef[1] = 0.8;
        $metric_2_3_coef[2] = 0.6;
        $metric_2_3_coef[3] = 0.4;
        $metric_2_3_coef[4] = 0.4;
        $metric_2_3_coef[5] = 0.2;
        $metric_2_3_coef[6] = 0.2;
        $metric_2_3_coef[7] = 0.1;
        $metric_2_3_coef[8] = 0.1;
        $metric_2_3_coef[9] = 0;
        $metric_2_3_coef[10] = 0;

        $metric_1_mark = (int) $data['metric_1_mark'];
        $metric_2_mark = (int) $data['metric_2_mark'];
        $metric_3_mark = (int) $data['metric_3_mark'];

        $employee_salary = (float) $employee->salary;

        $data['metric_1_risk'] = (($employee_salary)*1000)*$risk_1_coef*$metric_1_coef[$metric_1_mark];
        $data['metric_2_risk'] = (($employee_salary)*1000)*$risk_2_coef*$metric_2_3_coef[$metric_2_mark];
        $data['metric_3_risk'] = (($employee_salary)*1000)*$risk_3_coef*$metric_2_3_coef[$metric_3_mark];
        $data['risk_sum'] = $data['metric_1_risk'] + $data['metric_2_risk'] + $data['metric_3_risk'];

        $survey = SurveyHistory::create($data);

        return SurveyHistoryResource::make($survey);
    }

    public function update_survey_history(\App\Http\Requests\SurveyHistory\UpdateRequest $request, SurveyHistory $surveyHistory)
    {
        $data = $request->validated();

        $company = \App\Models\Company::where('user_id', Auth::id())->first();

        if (!$company) {
            return response()->json(['error' => 'Create company first'], 404);
        }

        $employee = Employee::where('id', $data['employee_id'])->first();

        if (!$employee) {
            return response()->json(['error' => 'Create employee first'], 404);
        }

        $risk_1_coef = (float) Metric::where('id', 1)->value('coefficient');

        $risk_2_coef = (float) Metric::where('id', 2)->value('coefficient');

        $risk_3_coef = (float) Metric::where('id', 3)->value('coefficient');

        $metric_1_coef[1] = 0.8;
        $metric_1_coef[2] = 0.8;
        $metric_1_coef[3] = 0.7;
        $metric_1_coef[4] = 0.5;
        $metric_1_coef[5] = 0.5;
        $metric_1_coef[6] = 0.3;
        $metric_1_coef[7] = 0.3;
        $metric_1_coef[8] = 0.1;
        $metric_1_coef[9] = 0.1;
        $metric_1_coef[10] = 0;
        $metric_1_coef[11] = 0;
        $metric_1_coef[12] = 0;

        $metric_2_3_coef[1] = 0.8;
        $metric_2_3_coef[2] = 0.6;
        $metric_2_3_coef[3] = 0.4;
        $metric_2_3_coef[4] = 0.4;
        $metric_2_3_coef[5] = 0.2;
        $metric_2_3_coef[6] = 0.2;
        $metric_2_3_coef[7] = 0.1;
        $metric_2_3_coef[8] = 0.1;
        $metric_2_3_coef[9] = 0;
        $metric_2_3_coef[10] = 0;

        $metric_1_mark = (int) $data['metric_1_mark'];
        $metric_2_mark = (int) $data['metric_2_mark'];
        $metric_3_mark = (int) $data['metric_3_mark'];

        $employee_salary = (float) $employee->salary;

        $data['metric_1_risk'] = (($employee_salary)*1000)*$risk_1_coef*$metric_1_coef[$metric_1_mark];
        $data['metric_2_risk'] = (($employee_salary)*1000)*$risk_2_coef*$metric_2_3_coef[$metric_2_mark];
        $data['metric_3_risk'] = (($employee_salary)*1000)*$risk_3_coef*$metric_2_3_coef[$metric_3_mark];
        $data['risk_sum'] = $data['metric_1_risk'] + $data['metric_2_risk'] + $data['metric_3_risk'];

        $surveyHistory->update($data);

        return new SurveyHistoryResource($surveyHistory);
    }

    public function show_survey_history(SurveyHistory $surveyHistory)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();

        $employee = Employee::where('id', $surveyHistory->employee_id)->first();

        if ($employee->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $last_date = $surveyHistory->survey_date;

        $previous_survey = SurveyHistory::where('employee_id', $surveyHistory->employee_id)
            ->where('survey_date', '<', $last_date)
            ->orderBy('survey_date', 'DESC')
            ->first();

        if (!$previous_survey) {
            return response()->json(['error' => 'There is no hisrory of employee'], 403);
        }

        $employee_statistics_for_1_metric = round((( ($surveyHistory->metric_1_mark) - ($previous_survey->metric_1_mark) )/0.12), 0);
        $employee_statistics_for_2_metric = round((( ($surveyHistory->metric_2_mark) - ($previous_survey->metric_2_mark) )/0.1), 0);
        $employee_statistics_for_3_metric = round((( ($surveyHistory->metric_3_mark) - ($previous_survey->metric_3_mark) )/0.1), 0);

        return response()->json([
            'employee' => [
                'first_name' => $employee->first_name,
                'middle_name' => $employee->middle_name,
                'last_name' => $employee->last_name,
            ],
            'metric_1'=> [
                'risk' => $surveyHistory->metric_1_risk,
                'mark' => $surveyHistory->metric_1_mark,
                'employee_statistics' => $employee_statistics_for_1_metric."%",
            ],
            'metric_2' => [
                'risk' => $surveyHistory->metric_2_risk,
                'mark' => $surveyHistory->metric_2_mark,
                'employee_statistics' => $employee_statistics_for_2_metric."%",
            ],
            'metric_3' => [
                'risk' => $surveyHistory->metric_3_risk,
                'mark' => $surveyHistory->metric_3_mark,
                'employee_statistics' => $employee_statistics_for_3_metric."%",
            ],

        ], 201);
    }

    public function store_absenteeism_rate(AbsenteeismStoreRequest $request)
    {
        $request = $request->validated();

        $company = Company::where('user_id', Auth::id())->first();

        if (!$company) {
            return response()->json(['error' => 'Create company first'], 404);
        }

        $request['company_id'] = $company->id;

        $absenteeism = AbsenteeismRate::create($request);

        return AbsenteeismResource::make($absenteeism);
    }

    public function index_absenteeism_rate()
    {

        if (!(auth()->check())) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $company = Company::where('user_id', Auth::id())->first();

        if (!$company) {
            return response()->json(['error' => 'Create company first'], 404);
        }

        $absenteeism_coef = AbsenteeismRate::where('company_id', $company->id)
            ->orderBy('created_at', 'DESC')
            ->pluck('coefficient')
            ->first();

        $metric_4_name = Metric::where('id', 4)->pluck('name')->first();
        $metric_5_name = Metric::where('id', 5)->pluck('name')->first();

        $metric_4_risk_name = Metric::where('id', 4)->pluck('risk_name')->first();
        $metric_5_risk_name = Metric::where('id', 5)->pluck('risk_name')->first();

        $avg_salary = Employee::where('company_id', $company->id)
            ->where('status', 'working')
            ->avg('salary');

        $risk_4_coef = (float) Metric::where('id', 4)->value('coefficient');
        $risk_5_coef = (float) Metric::where('id', 5)->value('coefficient');

        $working_employees = $avg_salary = Employee::where('company_id', $company->id)
            ->where('status', 'working')
            ->count();

        $fired_employees = $avg_salary = Employee::where('company_id', $company->id)
            ->where('status', 'fired')
            ->count();


        $metric_4_risk = (int) round($avg_salary*$risk_4_coef*0.05*1000, 0);
        $metric_5_risk = (int) round($avg_salary*$risk_5_coef*0.015*1000, 0);

        if ($working_employees == 0) {
            return response()->json(['error' => 'Hire at least one employee'], 404);
        }
        else {
            $staff_turnover = (float) round(($fired_employees/$working_employees)*100, 4);
        }

        if ($staff_turnover <= 5) {
            $metric_4_description = "≤ 5% - Метрика в норме, продолжайте ее отслеживать, чтобы контролировать состояние компании";
        }
        else {
            $metric_4_description = "> 5% - Обратите внимание на причины ухода из компании сотрудников, чтобы контролировать процесс управления трудовыми ресурсами";
        }

        if ($absenteeism_coef <= 0.15) {
            $metric_5_description = "≤ 15% - Норма, ваши сотрудники добросовестно посещают работу и выполняют трудовые обязанности";
        }
        else {
            $metric_5_description = "> 15% - Рекомендуем обратить внимание на причины пропуска работы вашими сотрудниками, выявить недобросовестных работников, провести мероприятие направленное на ликвидацию рисков пропуска рабочих дней";
        }

        return response()->json([
            'metric_4' => [
                'metric_name' => $metric_4_name,
                'risk_name' => $metric_4_risk_name,
                'risk' => $metric_4_risk,
                'coefficient' => $staff_turnover."%",
                'description' => $metric_4_description
            ],
            'metric_5' => [
                'metric_name' => $metric_5_name,
                'risk_name' => $metric_5_risk_name,
                'risk' => $metric_5_risk,
                'coefficient' => $absenteeism_coef,
                'description' => $metric_5_description
            ]
        ], 201);
    }
}
