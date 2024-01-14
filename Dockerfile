FROM node:lts as build
ARG REACT_APP_NOTION_TOKEN
ENV REACT_APP_NOTION_TOKEN=$REACT_APP_NOTION_TOKEN

ARG REACT_APP_NOTION_DB
ENV REACT_APP_NOTION_DB=$REACT_APP_NOTION_DB
WORKDIR /app
ADD . /app
RUN npm install
RUN npm run build

FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]