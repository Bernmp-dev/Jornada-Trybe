-- 1 Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.
-- customer que estão ativos e a quantidade que estão inativos.

use sakila;

select * from customer;

select active, count(*) from customer
group by active;

-- 2 Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja.
-- Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.

select store_id, active, count(*) from customer
group by store_id, active;

-- 3 Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados
-- na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.

select rating, avg(rental_duration) as 'avg' from film
group by rating
order by 'avg' asc;

-- 4 Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. 
-- Os resultados devem ser ordenados da maior quantidade para a menor.

select district, count(distinct address) as 'Address_Count' 
from address
group by district
order by 'Address_Count' asc;