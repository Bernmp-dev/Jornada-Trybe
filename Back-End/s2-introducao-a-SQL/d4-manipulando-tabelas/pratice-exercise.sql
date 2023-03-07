use pixar;

-- Exercício 1: Insira as produções da Pixar na tabela movies:

select * from movies;

insert into movies(title, director, year, length_minutes)
values('Monstros SA', 'Pete Docter', '2001', '92'),
('Procurando Nemo', 'John Lasseter', '2003', '107'),
('Os Incríveis', 'Brad Bird', '2004', '116'),
('WALL-E', 'Pete Docter', '2008', '104');

select * from movies;

-- Exercício 2: O filme Procurando Nemo foi classificado em 6.8,
-- fez 450 milhões no mercado interno e 370 milhões no mercado internacional.
-- Insira as informações à tabela box_office.

select * from box_office;

insert into box_office(rating, domestic_sales, international_sales)
values('6.8', '450000000', 370000000);

update box_office
set movie_id = '9'
where domestic_sales = 450000000;

select * from box_office;

-- Exercício 3: O nome do diretor do filme “Procurando Nemo” está incorreto,
-- ele foi dirigido por Andrew Stanton. Corrija esse dado utilizando o comando UPDATE.

select * from movies;

update movies
set director = 'Andrew Stanton'
where id = '9';

select * from movies;

-- Exercício 4: O título do filme “Ratatouille” está incorreto na tabela movies.
-- Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE.

select * from movies;

update movies
set title = 'Ratatouille', year = '2007'
where id = 3;

select * from movies;

-- Exercício 5: Insira as novas classificações abaixo na tabela box_office,
-- lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela movies:

select * from box_office;
select * from movies;

INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUES (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (11, 9.9, 290000000, 280000000);
         
-- Exercício 6: Exclua da tabela movies o filme “WALL-E”.

delete from movies
where id = 11;

select * from movies;

-- Exercício 7: Exclua da tabela movies todos os filmes dirigidos por “Andrew Stanton”.

delete from box_office
where movie_id in (2, 9);

delete from movies
where director = 'Andrew Stanton';

select * from movies;