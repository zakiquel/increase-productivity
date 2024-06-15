FROM node:18.18.0-alpine

WORKDIR /var/www/frontend

ADD package*.json ./

COPY . .

RUN npm install && npm run build:prod

CMD ["npm", "start"]

