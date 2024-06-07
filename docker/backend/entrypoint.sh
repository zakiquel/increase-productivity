#!/bin/sh

# Wait for MySQL to be ready
echo "Waiting for MySQL..."
while ! nc -z db 3306; do
  sleep 1
done
echo "MySQL is up - executing command"

# Run migrations and seed the database
php artisan migrate --force
php artisan db:seed --force

# Start PHP-FPM
php-fpm

