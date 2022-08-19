FROM node:alpine
WORKDIR /usr/src/pythoncodes
COPY publisher.js /usr/src/pythoncodes
COPY data.json /usr/src/pythoncodes
RUN npm install mqtt
CMD ["node", "publisher.js"]
