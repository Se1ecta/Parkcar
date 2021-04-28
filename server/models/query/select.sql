SELECT id_parkingspot, numberspot, TypeSpot.name from parkingspot
INNER JOIN typespot on typespot.id_typespot = parkingspot.type;


select numbercar, id_car, id_customer, name, title, id_car from car
inner join customer on customer.id_customer = car.customer
inner join mark on mark.id_mark = car.mark

select * from registration 
 INNER JOIN car on car.id_car=registration.car 
INNER JOIN parkingspot on parkingspot.id_parkingspot = registration.parkingspot


SELECT * FROM car 
FULL OUTER JOIN  customer on customer.id_customer= car.customer
FULL OUTER JOIN  mark on mark.id_mark = car.mark