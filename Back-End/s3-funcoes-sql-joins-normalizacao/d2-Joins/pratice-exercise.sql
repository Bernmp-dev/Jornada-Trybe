-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais
-- (domestic_sales) e internacionais (international_sales) de cada filme.

select * from movies;
select * from box_office;

select m.title, b.domestic_sales, b.international_sales 
from movies m
inner join box_office b
on m.id = b.movie_id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número
-- de vendas para cada filme que possui um número maior de vendas internacionais
-- (international_sales) do que vendas nacionais (domestic_sales).

select 
	m.title, 
	(b.domestic_sales + b.international_sales) AS total_de_vendas
from movies m
inner join box_office b
on m.id = b.movie_id
where b.international_sales > b.domestic_sales
order by total_de_vendas;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes
-- e sua avaliação (rating) em ordem decrescente.

select * from movies;
select * from box_office;

select m.title, b.rating
from movies m
inner join box_office b
on m.id = b.movie_id
order by rating;