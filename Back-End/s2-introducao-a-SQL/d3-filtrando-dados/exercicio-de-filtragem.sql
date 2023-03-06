select * from store.itens
where name like 'gr%';

select * from store.supplies
where item_id = 2
order by supplier_id;

select item_id, price, supplier_id from supplies
where supplier_id like '%n%';

select * from store.suppliers
where name like '%ltda%'
order by name desc;

select count(*) from store.suppliers
where id like '%f%';

select * from store.supplies
where price >= 15 and price < 40
order by price;

select count(*) from store.sales
where date(order_date) between '2018-04-15' and '2019-07-30';