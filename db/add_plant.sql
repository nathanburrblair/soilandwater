insert into inventory
(name, price, product_description, product_category)
values 
( ${name}, ${price}, ${product_description}, ${product_category});
select * from inventory;
-- order by id asc;