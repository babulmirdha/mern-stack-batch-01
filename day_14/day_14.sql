
-- create student table
create table students(
id integer primary key,
name text,
age integer,
department_id integer
);

select * from students
where department_id = 1;

insert into students values(1,'Jon Doe', 30, 1);
insert into students values(2,'Amran Hasan', 25, 2);
insert into students values(3,'Hasib Alam', 29, 1);




