FROM node:latest

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY . .

RUN npm i --force

EXPOSE 8080

CMD ["npm", "run", "dev"]