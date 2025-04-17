FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY structure/ /usr/share/nginx/html

EXPOSE 80