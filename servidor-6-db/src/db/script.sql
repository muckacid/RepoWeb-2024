CREATE DATABASE sec2;

use sec2;

CREATE TABLE IF NOT EXISTS persons (
    id INT NOT NULL AUTO_INCREMENT,
    surname VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS roles (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users_roles (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (role_id) REFERENCES roles (id)
);

INSERT INTO roles (name) VALUES ('ROLE_USER');
INSERT INTO roles (name) VALUES ('ROLE_ADMIN');
INSERT INTO users (username, password) VALUES ('admin', 123);
INSERT INTO users_roles (user_id, role_id) VALUES (1, 1);

INSERT INTO persons VALUES (null, 'John', 'Domain', 'j.domain@gmail.com', '111111111')
    , (null, 'Jane', 'Domain', 'j.domain@gmail.com' , '11111111');

select * from persons;
select * from users;

select * from roles;
select * from users_roles;


