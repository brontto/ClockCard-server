FROM node:14-alpine as build-stage

WORKDIR /usr/src/app

COPY . . 

RUN npm install 
    
FROM node:14-alpine

COPY --from=build-stage /usr/src/app /usr/src/app

EXPOSE 3001

WORKDIR /usr/src/app

RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup
    
USER appuser

CMD npm start
