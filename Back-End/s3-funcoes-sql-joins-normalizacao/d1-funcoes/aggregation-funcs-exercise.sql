-- 1 A média de duração dos filmes e dê o nome da coluna de ‘Média de Duração’;

select * from sakila.film;

select avg(length) as 'Média de Duração' from sakila.film;

-- 2 A duração mínima dos filmes como ‘Duração Mínima’;

select min(length) as 'Duração Mínima ' from sakila.film;

-- 3 A duração máxima dos filmes como ‘Duração Máxima’;

select max(length) as 'Duração Máxima' from sakila.film;

-- 4 A soma de todas as durações como ‘Tempo de Exibição Total’;

select sum(length) as 'Filmes Registrados' from sakila.film;

-- 5 E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como ‘Filmes Registrados’.

select distinct count(title) as 'Filmes Registrados' from sakila.film;

-- ou

SELECT AVG(length) AS 'Média de Duração',
       MIN(length) AS 'Duração Mínima',
       MAX(length) AS 'Duração Máxima',
       SUM(length) AS 'Tempo de Exibição Total',
       COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;