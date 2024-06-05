FROM registry.hub.docker.com/library/node:18.17
WORKDIR /app
COPY . .
RUN npm install && npm run webpack --env mode=production
CMD ["npm", "run", "start"]
