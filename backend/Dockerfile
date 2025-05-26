FROM php:8.2-fpm

WORKDIR /var/www

# 必要なPHP拡張のインストール
RUN apt-get update && apt-get install -y \
    git unzip curl libzip-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring zip exif pcntl

# Composerのインストール
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# Laravelアプリをコピー（初期構築時）
COPY ./backend /var/www

# パーミッション調整（必要であれば）
RUN chown -R www-data:www-data /var/www
