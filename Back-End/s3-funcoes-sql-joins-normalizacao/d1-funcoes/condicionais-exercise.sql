-- 1 Usando o IF na tabela sakila.film, exiba o id do filme,
-- o título e uma coluna extra chamada ‘conheço o filme?’,
-- em que deve-se avaliar se o nome do filme é ‘ACE GOLDFINGER‘.
-- Caso seja, exiba “Já assisti a esse filme”. Caso contrário, exiba “Não conheço o filme”.
-- Não esqueça de usar um alias para renomear a coluna da condicional.

select 
	film_id,
	title, 
    if(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme')
as 'conheço o filme?'
from sakila.film;

-- 2 Usando o CASE na tabela sakila.film, exiba o título, a classificação indicativa (rating)
-- e uma coluna extra que vamos chamar de ‘público-alvo’ em que colocaremos a classificação
-- do filme de acordo com as seguintes siglas:

select 
	title,
    rating,
	case
		when rating = 'G' then 'Livre para todos'
        when rating = 'PG' then 'Não recomendado para menores de 10 anos'
        when rating = 'PG-13' then 'Não recomendado para menores de 13 anos'
        when rating = 'R' then 'Não recomendado para menores de 17 anos'
        else 'Proibido para menores de idade'
	end as 'público-alvo'
 from sakila.film;