FROM node:16

WORKDIR /app

COPY package*.json ./ 

RUN npm install --production

COPY . .

EXPOSE 9095

CMD ["node","index.js"]