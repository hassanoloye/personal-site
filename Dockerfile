FROM node:10-alpine as builder
ENV LANG en_US.utf8
ARG directory=/usr/local/personal-site

RUN mkdir -p $directory
WORKDIR $directory

COPY package*.json app.js ./
RUN npm install
COPY build/ $directory/build/

RUN rm -f .env
EXPOSE 5000
CMD ["sh", "-c", "npm start"]
