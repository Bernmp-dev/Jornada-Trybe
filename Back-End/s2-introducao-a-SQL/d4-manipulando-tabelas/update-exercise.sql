use sakila;

select * from actor;

update actor
set first_name = 'JULES'
where first_name = 'JULIA';

select * from film;

update category
set name = 'Science Fiction'
where name = 'Sci-fi';

select * from category;

UPDATE film
SET rental_rate = 25
WHERE length > 100
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;

update film 
set rental_rate = (
case
	when length <= 100 then 10.00
    else 20.00
end
);

select * from film;