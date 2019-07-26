# node-app-template

ALTER USER 'root'@'localhost' IDENTIFIED BY 'rootroot';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'rootroot'


SELECT user,authentication_string,plugin,host FROM mysql.user;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'rootroot';
FLUSH PRIVILEGES;