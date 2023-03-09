-- 1. Escreva uma query que exiba o maior salário da tabela.

select * from employees;

select max(salary) from employees;

-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.

select (max(salary) - min(salary)) from employees;

-- 3. 🚀 Escreva uma query que exiba a média salarial de cada job_id,
--  ordenando pela média salarial em ordem decrescente.

select job_id, avg(salary) as avg_salary
from employees
group by job_id
order by avg_salary desc;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para 
-- realizar o pagamento de todas as pessoas funcionárias.

select sum(salary) from employees;

-- 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário,
-- o menor salário, a soma de todos os salários e a média dos salários. 
-- Todos os valores devem ser formatados para ter apenas duas casas decimais.

select max(salary), min(salary), sum(salary), round(avg(salary), 2) from employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).

select job_id, count(*) as numero_de_funcionarios from employees
group by job_id
having job_id = 'it_prog';


-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).

select job_id, sum(salary)
as total
from employees
group by job_id;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária
-- para cobrir a folha de pagamento das pessoas programadoras (it_prog).

select job_id, sum(salary)
as total
from employees
group by job_id
having job_id = 'it_prog';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos,
-- exceto das pessoas programadoras (it_prog).

select job_id, avg(salary) as total
from employees
group by job_id
having job_id <> 'it_prog'
order by total desc;

-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos
-- os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.

select job_id,
avg(salary) as avg_salary,
count(employee_id) as  emp_count
from employees
group by job_id
having emp_count > 10;

-- 11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones
-- iniciados por 515 agora devem iniciar com 777.

SET SQL_SAFE_UPDATES = 0;

update employees
set phone_number = replace(phone_number, '515', '777')
where phone_number like '515%';

select * from employees;

SET SQL_SAFE_UPDATES = 1;

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

select *
from employees
where length(first_name) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id, primeiro nome e ano no qual foi contratado (exiba somente o ano).

select 
employee_id,
first_name,
YEAR(hire_date) as hire_year
from employees;

-- 14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

select 
employee_id,
first_name,
dayofmonth(hire_date) as hire_day
from employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id, primeiro nome e mês no qual foi contratado (exiba somente o mês).

select 
employee_id,
first_name,
monthname(hire_date) as hire_month
from employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

select upper(concat(first_name, " ", last_name))
from hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

select * from employees;

select last_name, hire_date 
from employees
where hire_date like '1987-07%';

-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário:
-- nome, sobrenome, tempo que trabalha na empresa (em dias).

select first_name, last_name, datediff(current_date(), hire_date) from employees;