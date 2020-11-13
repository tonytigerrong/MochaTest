##### for nginx container build
#FROM nginx:latest
#ADD . /usr/share/nginx/html
##### for tomcat container build
FROM tomcat:latest
ADD . /usr/local/tomcat/webapps/test

