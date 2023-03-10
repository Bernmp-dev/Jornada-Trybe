-- 🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações
-- dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com
-- avaliação maior que 8.

select * from movies;
select * from box_office;
select * from theater;

select 
	m.id,
	m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
from movies m
inner join box_office b
on m.id = b.movie_id
where theater_id is not null
and b.rating > 8;