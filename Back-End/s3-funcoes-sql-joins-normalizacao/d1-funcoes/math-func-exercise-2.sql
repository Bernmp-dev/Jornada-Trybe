-- 1 Monte uma query que gere um valor entre 15 e 20.

select round( 15 + (rand() * 5));

-- 2 Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.

select round(15.7515971, 5);

-- 3 Estamos com uma média de 39.494 de vendas de camisas por mês.
-- Qual é o valor aproximado para baixo dessa média?

select floor(39.494);

-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes.
-- Qual é o valor aproximado para cima dessa média?

select ceil('85.234%');