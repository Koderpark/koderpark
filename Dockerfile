FROM node:lts as build-deps
WORKDIR /app
ADD . /app

RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build-deps /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]