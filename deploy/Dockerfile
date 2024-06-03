FROM registry.hub.docker.com/library/php:8.3-fpm as backend

RUN apt-get update && apt-get install -y \
    apt-utils \
    libpq-dev \
    libpng-dev \
    libzip-dev \
    zip unzip \
    git && \
    docker-php-ext-install pdo_pgsql && \
    docker-php-ext-install bcmath && \
    docker-php-ext-install gd && \
    docker-php-ext-install zip && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# RUN useradd -G www-data,root -u $uid -d /home/$user $user
# RUN mkdir -p /home/$user/.composer && \
#     chown -R $user:$user /home/$user

# USER $user

WORKDIR /var/www/backend/

COPY ./backend/ ./
COPY ./backend/app/php.ini /usr/local/etc/php/conf.d/php.ini

COPY --from=registry.hub.docker.com/library/composer:2 /usr/bin/composer /usr/bin/composer

# RUN composer update

RUN composer install --no-dev --optimize-autoloader




FROM registry.hub.docker.com/library/nginx:latest as nginx

COPY ./docker/nginx/nginx.conf /etc/nginx/default.conf

# COPY --from=frontend /var/www/frontend/public /usr/share/nginx/html/
