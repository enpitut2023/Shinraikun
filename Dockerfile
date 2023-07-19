FROM nginx:alpine

COPY home.html /usr/share/nginzx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]