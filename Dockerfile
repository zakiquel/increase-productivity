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
COPY ./backend/ ./
COPY --from=registry.hub.docker.com/library/composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
RUN chmod -R 777 ./

WORKDIR /var/www/backend/


# FROM registry.hub.docker.com/library/node:18.18.0-alpine as frontend

#WORKDIR /var/www/frontend
#ADD frontend/package*.json ./
#COPY frontend ./
#RUN npm install && npm run build



FROM registry.hub.docker.com/library/nginx:1.17 as nginx

WORKDIR /var/www/

# COPY --from=frontend /var/www/frontend/build /var/www/frontend
COPY --from=backend /var/www/backend /var/www/backend

COPY /docker/nginx/conf.d/devconf.conf /etc/nginx/conf.d/default.conf