#/app /usr /lib
#dependencia de desarrollo

#FROM --platform=linux/arm64 node:19.2-alpine3.17
#FROM --platform=$BUILDPLATFORM node:19.2-alpine3.17
#APP ya viene con un carpeta interna /APP
#CD APP
FROM  --platform=$BUILDPLATFORM node:19.2-alpine3.17 as deps
WORKDIR /app
COPY package.json ./  
RUN npm install

#test build
FROM --platform=$BUILDPLATFORM node:19.2-alpine3.17 as build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules 
COPY  . .
RUN npm run test

#dependencias de produccion
FROM  --platform=$BUILDPLATFORM node:19.2-alpine3.17 as prod-deps
WORKDIR /app
COPY package.json ./ 
RUN npm install --prod

#ejecutar
FROM  --platform=$BUILDPLATFORM node:19.2-alpine3.17 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules 
COPY app.js ./
COPY tasks/ ./tasks
CMD ["node","app.js"]


#docker build --tag cron-ticker .
#docker run cron-ticker
#docker build --tag cron-ticker:1.0.0 .
#docker image tag cron-ticker:1.0.0 cron-ticker:yaneth
# docker run  cron-ticker:1.0.0 
#docker image tag cron-ticker  yjd7/cron-ticker #with docker hub 
#ocker push yjd7/cron-ticker # por defecto toma el latest
#docker image tag  yjd7/cron-ticker:latest yjd7/cron-ticker:yaneth
#docker push yjd7/cron-ticker:yaneth
#docke image prune -a //borra todas las imagnes
#docker stop $(docker ps -aq)
#docker build -t yjd7/cron-ticker:mapache .
#docker build -t yjd7/cron-ticker:mapache .
#docker container run -d yjd7/cron-ticker:mapache
#docker exec -it 3a92df5bbd57 /bin/sh
#docker build -t yjd7/cron-ticker:tigre .
#docker container run -d yjd7/cron-ticker:tigre
#docker exec -it 6f4e25605ab8  /bin/sh
#ls -al
# para poner  el mismo hash 
#yjd7/cron-ticker              latest            4d175e8116f7   31 minutes ago   236MB
#yjd7/cron-ticker              mapache           4d175e8116f7   31 minutes ago   236MB

#docker image tag yjd7/cron-ticker:pantera  yjd7/cron-ticker:latest

#docker push yjd7/cron-ticker

#----docker buildx--
#docker buildx create --name mybuilder --driver docker-container --bootstrap
#mybuilder
#docker buildx use mybuilder
#docker buildx ls
#docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7  -t yjd7/cron-ticker:gato --push .
#docker buildx inspect