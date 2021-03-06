FROM node:11.13.0-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

RUN apk update && apk add git python make g++

COPY . /usr/src/nuxt-app/
RUN npm install

RUN npm run build

EXPOSE 5000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000

CMD [ "npm", "start" ]
