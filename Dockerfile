FROM node:20.17.0-alpine

RUN mkdir -p /home/node/app/

WORKDIR /home/node/app

COPY Endpoint/package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "index.js" ]