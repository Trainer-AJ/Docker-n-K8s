# BASE IMAGE - Starting Point 
FROM ubuntu

# Run commands to install nginx 
RUN apt update -y && apt install nginx -y

# Bring Your Code 
COPY . /var/www/html

# NOTE: Copy Commands Copies All files from pwd to /var/www/html inside container

# Ports
EXPOSE 80

# Keep running nginx in background
CMD ["nginx", "-g", "daemon off;"]