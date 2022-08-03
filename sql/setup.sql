-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS book_author;
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
    released BIGINT NOT NULL,
);
INSERT INTO books (title, released) VALUES
('Medea', -431),
('Iliad', 735),
('Odyssey', -800),
('Zorba the Greek', 1946),    
('Oedipus the King', -430);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_name VARCHAR,
    author_dob BIGINT,
    author_pob_pop BIGINT
);
INSERT INTO authors (author_name, author_dob, author_pob_pop) VALUES
('Euripides', -480, 42),
('Homer', -850, 1000),
('Nikos Kazantzakis', 1883, 1000),
('Sophocles', -496, 60);

CREATE table book_author (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    book_id BIGINT NOT NULL,
    author_id BIGINT NOT NULL,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (author_id) REFERENCES authors(id)
);
INSERT INTO book_author (book_id, author_id) VALUES
(1, 1),
(2, 2),
(3, 2),
(4, 3),
(5, 4);
