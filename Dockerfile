FROM node:18
WORKDIR /app
ARG DB_URI=mongodb://mongo:27017/olivia
COPY package.json /app
COPY . /app
RUN npm install
RUN npm run build
CMD npm start
EXPOSE 8080