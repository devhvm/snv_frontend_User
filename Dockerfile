FROM centos:latest

RUN yum -y install httpd
WORKDIR /var/www/html

COPY build ./

CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]

EXPOSE 80
