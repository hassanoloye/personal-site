FROM node:10-alpine as builder
ENV LANG en_US.utf8
ARG directory=/usr/local/personal-site

RUN mkdir -p $directory
WORKDIR $directory

COPY ./ $directory/
RUN npm install && npm run build

EXPOSE 5000
CMD ["sh", "-c", "npm start"]
