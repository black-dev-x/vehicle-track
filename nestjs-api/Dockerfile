FROM node:22.8.0-slim

RUN apt update && apt install openssl procps -y

WORKDIR /app


COPY package.json /app
COPY package-lock.json /app

RUN npm install
RUN npm run prisma

COPY . /app

CMD tail -f /dev/null
