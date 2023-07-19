FROM nginx:alpine

COPY home.html /usr/share/nginzx/html/home.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]