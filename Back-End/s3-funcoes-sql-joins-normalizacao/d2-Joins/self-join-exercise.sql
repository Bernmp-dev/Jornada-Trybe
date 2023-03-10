-- 1 Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências
-- (manager) cujos departamentos (department) são diferentes.

select * from employees;

select 
	concat(Employee.first_name, " ", Employee.last_name) as "Nome da Pessoa Colaboradora",
	concat(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
from employees as Employee
inner join employees as Manager
on Employee.manager_id = Manager.employee_id;

-- 2 Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.

select * from employees;

select 
	concat(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente",
	count(*) as "Quantidade de pessoas lideradas"
from 
	employees as Employee
inner join 
	employees as Manager
	on Employee.manager_id = Manager.employee_id
group by 
	Manager.employee_id;
