FROM node:8-alpine

# This will actually work:
# FROM node:8-stretch

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

RUN npm test