FROM node:16-alpine

RUN  mkdir -p /home/kalmar-next-app

WORKDIR /home/kalmar-next-app

COPY  . /home/kalmar-next-app
COPY package.json /home/kalmar-next-app/
COPY yarn.lock /home/kalmar-next-app/

RUN apk update && apk upgrade && apk add --no-cache git 

RUN npm install -g yarn  --force && yarn config set registry https://registry.npm.taobao.org && yarn  && yarn build

EXPOSE 8091

CMD [ "yarn", "start" ]