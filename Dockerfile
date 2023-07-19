FROM nginx:alpine

COPY home.html /usr/share/nginx/html/home.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]