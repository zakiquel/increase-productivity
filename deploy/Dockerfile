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

RUN chmod -R 777 /var/www/backend/storage/


FROM registry.hub.docker.com/library/node:18.17 as frontend
WORKDIR /app
COPY ./frontend .
RUN npm install && npm run build:prod
CMD ["npm", "run", "start"]


FROM registry.hub.docker.com/library/nginx:1.17 as nginx

#COPY --from=backend /var/www/backend /var/www/backend
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=frontend ./app/build /var/www/frontend
