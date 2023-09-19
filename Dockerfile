FROM node:lts as build
WORKDIR /app
ADD . /app

RUN npm install
RUN npm run build

FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build nginx.conf /etc/nginx/conf.d
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]