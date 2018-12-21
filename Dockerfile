FROM node:carbon-jessie

COPY . /code

ENTRYPOINT [ "node", "/code/index.js" ]