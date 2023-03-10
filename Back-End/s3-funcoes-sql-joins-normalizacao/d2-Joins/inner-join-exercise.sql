select * from actor;
select * from film_actor;

-- 1 Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou,
-- usando as tabelas actor e film_actor.

select a.actor_id, a.first_name, f.film_id
from sakila.actor a
inner join sakila.film_actor f
on a.actor_id = f.actor_id;

-- 2 Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco.
-- Use as tabelas staff e address.

select * from staff;
select * from address;

select s.first_name, s.last_name, a.address 
from staff s
inner join address a
on s.address_id = a.address_id;

-- 3 Exiba o id do cliente, nome e email dos primeiros 100 clientes, 
-- ordenados pelo nome em ordem decrescente,
-- juntamente com o id do endereço e o nome da rua onde o cliente mora.
-- Essas informações podem ser encontradas nas tabelas customer e address.

select * from customer;
select * from address;

select c.customer_id, c.first_name, c.email, a.address_id, a.address
from customer c
inner join address a
on c.address_id = a.address_id
order by c.first_name desc
limit 100;

-- 4 Exiba o nome, email, id do endereço, endereço e distrito dos clientes
-- que moram no distrito da California e que contêm “rene” em seus nomes.
-- As informações podem ser encontradas nas tabelas address e customer.

select * from address;
select * from customer;

select c.first_name, c.email, c.address_id, a.address, a.district
from customer c
inner join address a
on c.address_id = a.address_id
where a.district = 'California'
and c.first_name like '%rene%';

-- 5 Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado.
-- Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba somente os clientes ativos.
-- As informações podem ser encontradas nas tabelas customer e rental.

select * from rental;
select * from customer;

select c.first_name, c.last_name, count(r.rental_id) as film_quantity
from customer c
inner join rental r
on c.customer_id = r.customer_id
where c.active = 1
group by c.customer_id
order by first_name desc, last_name desc;

-- 6 Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006.
-- Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

select * from payment;
select * from staff;

select CONCAT(s.first_name," ", s.last_name) as 'full_name', 
avg(p.amount) as 'avg_pay'
from staff s
inner join payment p
on s.staff_id = p.staff_id
where year(p.payment_date) = 2006
group by s.staff_id;

-- 7 Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor,
-- film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.

select * from actor;
select * from film;
select * from film_actor;

select 
a.actor_id, a.first_name,
f.film_id, f.title
from actor a
inner join film_actor fa
on a.actor_id = fa.actor_id
inner join film f
on f.film_id = fa.film_id;