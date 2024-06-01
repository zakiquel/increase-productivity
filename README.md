# Productivity App

Этот проект представляет собой бекенд для Productivity App, который можно запустить с помощью Docker. В этом руководстве описывается, как настроить и запустить проект.

## Требования

- Docker
- Docker Compose

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://gitlab.abdrashitov-academy.ru/apple-jam/increase-productivity.git
   ```

2. Перейдите в каталог проекта:

   ```bash
   cd increase-productivity/backend/productivity-app
   ```

## Запуск

Для запуска проекта выполните следующие команды:

1. Запустите Docker Compose:

   ```bash
   docker compose --env-file ./backend/.env up -d
   ```

   Эта команда создаст и запустит контейнеры в фоновом режиме.

2. Зайдите внутрь контейнера приложения:

   ```bash
   docker exec -it productivity-app bash
   ```

   Здесь `productivity-app` — это имя вашего контейнера. Убедитесь, что оно совпадает с именем контейнера в вашем `docker-compose.yml` файле.

3. Запустите команду для установки приложения:

   ```bash
   composer install
   ```

4. Выполните миграции базы данных:

   ```bash
   php artisan migrate
   ```

   Эта команда создаст необходимые таблицы в базе данных.

## Завершение работы

Для остановки и удаления контейнеров выполните:

```bash
docker-compose down
```

# API endpoints

## Register a new user

Method: POST
URL:http://localhost:8000/api/auth/register
Body:

```json
{
  "name": "test",
  "email": "test@test.com",
  "password": "password",
  "password_confirmation": "password"
}
```

Response example:

```json
{
  "message": "User successfully registered",
  "user": {
    "name": "test",
    "email": "test@test.com",
    "updated_at": "2024-05-23T09:24:39.000000Z",
    "created_at": "2024-05-23T09:24:39.000000Z",
    "id": 3
  },
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvcmVnaXN0ZXIiLCJpYXQiOjE3MTY0NTYyNzksImV4cCI6MTcxNjQ1OTg3OSwibmJmIjoxNzE2NDU2Mjc5LCJqdGkiOiJsUGdYdkwxajRXTThMM1ZNIiwic3ViIjoiMyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Ve9ji3ROtRp2XxpJferv7066mtfpeXiE8SQ98lOoly8",
  "token_type": "bearer",
  "expires_in": 3600
}
```

## Login

Method: POST
URL:http://localhost:8000/api/auth/login
Body:

```json
{
  "email": "test@example.com",
  "password": "password"
}
```

Response example:

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTY0NTYyNDAsImV4cCI6MTcxNjQ1OTg0MCwibmJmIjoxNzE2NDU2MjQwLCJqdGkiOiJ3cHVtcm9OMkxSWTJUbkY4Iiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.wjYM7zJWnWFYvutYoobpcqKSqCZ4NYKvmw0U3MbzEyk",
  "token_type": "bearer",
  "expires_in": 3600
}
```

## Logout

Method: POST
URL:http://localhost:8000/api/auth/logout
Required Header: Bearer token + JWT token
Body:

```json
{}
```

Response example:

```json
{
  "message": "Successfully logged out"
}
```

## Get All Employees

Method: GET
URL:http://localhost:8000/employees
Body:

```json
{}
```

Response example:

```json
[
  {
    "id": 1,
    "first_name": "John",
    "middle_name": "Max",
    "last_name": "Doe",
    "date_of_birth": "1985-01-01",
    "position": "Developer",
    "work_experience": 5.5,
    "salary": 75000,
    "email": "john.doe@example.com",
    "phone_number": "1234567890",
    "created_at": "2024-05-26T12:34:56.000000Z",
    "updated_at": "2024-05-26T12:34:56.000000Z"
  }
]
```

## Get a Specific Employee

Method: GET
URL:http://localhost:8000/employees/{id}
Body:

```json
{}
```

Response example:

```json
{
  "id": 1,
  "first_name": "John",
  "middle_name": "Max",
  "last_name": "Doe",
  "date_of_birth": "1985-01-01",
  "position": "Developer",
  "work_experience": 5.5,
  "salary": 75000,
  "email": "john.doe@example.com",
  "phone_number": "1234567890",
  "created_at": "2024-05-26T12:34:56.000000Z",
  "updated_at": "2024-05-26T12:34:56.000000Z"
}
```

## Update an Employee

Method: PUT
URL:http://localhost:8000/employees/{id}
Body:

```json
{
  "first_name": "John",
  "middle_name": "Maxwell",
  "last_name": "Doe",
  "date_of_birth": "1985-01-01",
  "position": "Senior Developer",
  "work_experience": 6.0,
  "salary": 80000,
  "email": "john.maxwell@example.com",
  "phone_number": "1234567890"
}
```

Response example:

```json
{
  "success": true,
  "message": "Employee updated successfully.",
  "data": {
    "id": 1,
    "first_name": "John",
    "middle_name": "Maxwell",
    "last_name": "Doe",
    "date_of_birth": "1985-01-01",
    "position": "Senior Developer",
    "work_experience": 6.0,
    "salary": 80000,
    "email": "john.maxwell@example.com",
    "phone_number": "1234567890",
    "created_at": "2024-05-26T12:34:56.000000Z",
    "updated_at": "2024-05-26T12:34:56.000000Z"
  }
}
```

## Delete an Employee

Method: DELETE
URL:http://localhost:8000/employees/{id}
Body:

```json
{}
```

Response example:

```json
{
  "success": true,
  "message": "Employee deleted successfully."
}
```

## Get All Companies

Method: GET
URL:http://localhost:8000/companies
Body:

```json
{}
```

Response example:

```json
{{
    "message": "Success",
    "companies": [
        {
            "id": 1,
            "name": "testComp-lim",
            "address": "test",
            "phone_number": "test",
            "email": "test@test.com",
            "description": "test",
            "created_at": "2024-05-26T16:56:48.000000Z",
            "updated_at": "2024-05-26T16:56:48.000000Z"
        },
        {
            "id": 2,
            "name": "testComp-lim",
            "address": "test",
            "phone_number": "test",
            "email": "test@test.com",
            "description": "test",
            "created_at": "2024-05-26T17:04:38.000000Z",
            "updated_at": "2024-05-26T17:04:38.000000Z"
        },
        {
            "id": 3,
            "name": "testComp-lim",
            "address": "test",
            "phone_number": "test",
            "email": "test@test.com",
            "description": "test",
            "created_at": "2024-05-26T17:04:38.000000Z",
            "updated_at": "2024-05-26T17:04:38.000000Z"
        }
    ]
}}
```

## Get a Specific Company

Method: GET
URL:http://localhost:8000/companies/{id}
Body:

```json
{}
```

Response example:

```json
{{
    "message": "Success",
    "company": {
        "id": 1,
        "name": "testComp-lim",
        "address": "test",
        "phone_number": "test",
        "email": "test@test.com",
        "description": "test",
        "created_at": "2024-05-26T16:56:48.000000Z",
        "updated_at": "2024-05-26T16:56:48.000000Z"
    }
}}
```

## Create a Company

Method: POST
URL:http://localhost:8000/companies
Body:

```json
{
  "name": "testComp-lim",
  "address": "test",
  "phone_number": "test",
  "email": "test@test.com",
  "description": "test"
}
```

Response example:

```json
{
  "success": true,
  "message": "Company created successfully.",
  "data": {
    "name": "testComp-lim",
    "address": "test",
    "phone_number": "test",
    "email": "test@test.com",
    "description": "test",
    "updated_at": "2024-05-26T17:04:38.000000Z",
    "created_at": "2024-05-26T17:04:38.000000Z",
    "id": 3
  }
}
```

## update a Specific Company

Method: PUT
URL:http://localhost:8000/companies/{id}
Body:

```json
{
  "name": "testComp-lim",
  "address": "address",
  "phone_number": "test",
  "email": "test@test.com",
  "description": "test"
}
```

Response example:

```json
{
  "success": true,
  "message": "Company updated successfully.",
  "data": {
    "id": 1,
    "name": "testComp-lim",
    "address": "address",
    "phone_number": "test",
    "email": "test@test.com",
    "description": "test",
    "created_at": "2024-05-26T16:56:48.000000Z",
    "updated_at": "2024-05-26T17:08:41.000000Z"
  }
}
```

## delete a Specific Company

Method: DELETE
URL:http://localhost:8000/companies/{id}
Body:

```json
{}
```

Response example:

```json
{
  "message": "Success",
  "company": {
    "id": 1,
    "name": "testComp-lim",
    "address": "address",
    "phone_number": "test",
    "email": "test@test.com",
    "description": "test",
    "created_at": "2024-05-26T16:56:48.000000Z",
    "updated_at": "2024-05-26T17:08:41.000000Z"
  }
}
```
