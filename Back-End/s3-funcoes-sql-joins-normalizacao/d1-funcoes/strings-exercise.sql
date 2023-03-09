-- 1 Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.

select ucase('trybe') as Escola;

-- 2 Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?'
-- em 'Você já ouviu falar do Google?'.

select replace('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- 3 Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.

select char_length('Uma frase qualquer');

-- 4 Extraia e retorne apenas a palavra “JavaScript” da frase
-- 'A linguagem JavaScript está entre as mais usadas'.

SELECT substring('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- 5 Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL'
-- para que suas informações estejam todas em caixa baixa.

select lcase('RUA NORTE 1500, SÃO PAULO, BRASIL');