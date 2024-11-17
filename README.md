# Increase-productivity

## Веб-приложение для HR-аналитики с целью повышения продуктивности работы команды путем контроля соответствия сотрудников ценностям компании и отслеживания динамики метрик, корректировки лояльности с помощью проведения предложенных платформой мероприятий

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

