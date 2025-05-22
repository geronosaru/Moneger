FROM php:8.2-fpm

# 必要な拡張をインストール
RUN apt-get update && apt-get install -y \
    zip unzip git curl libzip-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo_mysql zip

# Composer（別イメージからコピー）
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Laravelプロジェクトを配置（初回は空でもOK）
COPY ./backend /var/www

# composer install（初回はキャッシュ無視でOK）
RUN composer install || true

# Laravelの権限設定（必要に応じて）
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage

EXPOSE 9000
