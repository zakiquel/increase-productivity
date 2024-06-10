FROM registry.hub.docker.com/library/php:8.3-fpm as backend

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
COPY --from=registry.hub.docker.com/mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/

RUN install-php-extensions intl sysvsem pdo_mysql gd exif

WORKDIR /var/www/backend/

# COPY ./backend/ ./

# COPY ./backend/app/php.ini /usr/local/etc/php/conf.d/php.ini

COPY --from=registry.hub.docker.com/library/composer:2 /usr/bin/composer /usr/bin/composer

# RUN composer install --no-dev --optimize-autoloader

# RUN chmod -R 777 /var/www/backend/storage/


FROM registry.hub.docker.com/library/nginx:1.17 as nginx

COPY --from=backend /var/www/backend /var/www/backend
COPY nginx.conf /etc/nginx/conf.d/default.conf