# FROM registry.hub.docker.com/library/node:18.17
# WORKDIR /app
# COPY . .
# RUN npm install && npm run build
# CMD ["npm", "run", "start"]

FROM node:18.18.0-alpine

WORKDIR /var/www/frontend

ADD package*.json ./

COPY . .

RUN npm install && npm run build

CMD ["npm", "start"]