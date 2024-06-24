FROM node:18.18.0-alpine

WORKDIR /var/www/frontend

COPY package_.json ./

COPY ./frontend .

RUN npm install

RUN npm run lint:ts && npm run lint:scss