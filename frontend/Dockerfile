FROM registry.hub.docker.com/library/node:18.17
WORKDIR /app
COPY . .
RUN npm install && npm build:prod
CMD ["npm", "run", "start"]
