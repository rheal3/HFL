CREATE USER hfl_admin WITH PASSWORD 'squigglechickendroppings';
ALTER USER hfl_admin WITH SUPERUSER;
CREATE DATABASE hfl_database;
GRANT ALL PRIVILEGES ON DATABASE hfl_database TO hfl_admin;

\c hfl_database hfl_admin

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR,
    email VARCHAR UNIQUE
);

CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    entry VARCHAR,
    user_id INTEGER REFERENCES users (id)
);