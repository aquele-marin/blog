FROM node:22-alpine

EXPOSE 3000

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "run", "dev" ]
