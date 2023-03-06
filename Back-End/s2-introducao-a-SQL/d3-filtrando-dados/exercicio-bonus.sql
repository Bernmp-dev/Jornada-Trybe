use scientists;

select *  from Scientists
where name like '%e%';

select *  from Projects
where code like 'a%'
order by Name;

select Code, Name  from Projects
where code like '%3%'
order by Name;

select Scientist from AssignedTo
where Project in('AeH3', 'Ast3', 'Che1');

select * from Projects
where Hours >= 500;

select * from Projects
where Hours between 250 and 800;

select * from Projects
where Name not like 'a%';

select * from Projects
where name like '%h%';