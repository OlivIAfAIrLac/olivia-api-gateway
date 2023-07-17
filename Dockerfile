FROM node:18

# Create app directory
WORKDIR /usr/src/app
COPY package.json ./
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . ./

RUN npm install
RUN npm run build
# If you are building your code for production


EXPOSE 8080
CMD [ "npm", "start" ]