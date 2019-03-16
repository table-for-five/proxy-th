FROM node:latest

RUN mkdir -p /src/newapp3

WORKDIR /src/newapp3

COPY . /src/newapp3

RUN npm install

EXPOSE 3009

CMD ["npm", "start"]