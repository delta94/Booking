FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./packages/server/package.json ./packages/server/

RUN npm i -g yarn
RUN yarn install

COPY ./packages/server/dist ./packages/server/dist

WORKDIR ./packages/server

EXPOSE 4000

CMD ["node", "dist/main.js"]