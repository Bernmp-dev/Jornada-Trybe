-- 1 - Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias
-- que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length),
-- de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.  

SELECT rating, AVG(length) as avg_duration
FROM sakila.film
GROUP BY rating
having avg_duration between 115.0 and 121.50
order by avg_duration desc;

-- Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima
-- de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível.
-- Finalize ordenando os resultados de forma crescente.

SELECT rating, SUM(replacement_cost) as total
FROM sakila.film
GROUP by rating
having total > 3950.50
order by total;