FROM node:12.9.1-alpine

# Here add all the env vars of the project like below
ARG API_URL
ENV API_URL=$API_URL

WORKDIR /usr/src/app

RUN apk add yarn
COPY . .

RUN mkdir -p dist

RUN yarn
RUN yarn add -D webpack-cli@3.3.10
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
