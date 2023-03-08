FROM node:18.12.1

WORKDIR /app

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install 



CMD [ "npm", "start" ]