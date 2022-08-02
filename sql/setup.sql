-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE books (
    table_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(280) NOT NULL,
    released BIGINT
);

CREATE TABLE authors (
    author_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_name VARCHAR,
    author_dob BIGINT,
    author_pob_pop BIGINT
);

INSERT INTO books (
    title,
    released
)
VALUES
    ('Medea', '-431'),
    ('Iliad', '735'),
    ('Odyssey', '-800'),
    ('Zorba the Greek', '1946'),    
    ('Oedipus the King', '-430')
;    

INSERT INTO authors (
    author_name,
    author_dob,
    author_pob_pop
)
VALUES
    ('Euripides', -480, 42),
    ('Homer', -850, 1000),
    ('Nikos Kazantzakis', 1883, 1000),
    ('Sophocles', -496, 60)
;