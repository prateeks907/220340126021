FROM node:alpine
LABEL maintainer="prateeks907@gmail.com"
WORKDIR /usr/src/pythoncodes
COPY publisher.js /usr/src/pythoncodes
COPY data.json /usr/src/pythoncodes
RUN npm install mqtt
CMD ["node", "pub.js"]
