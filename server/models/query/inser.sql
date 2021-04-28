
-- TypeSpot
INSERT INTO typespot(title) VALUES('Truck');
INSERT INTO typespot(title) VALUES('Car');
INSERT INTO typespot(title) VALUES('Motobike');

-- ParkingSpot

INSERT INTO parkingspot(numberspot,type_) VALUES(1,1);
INSERT INTO parkingspot(numberspot,type_) VALUES(2,1);
INSERT INTO parkingspot(numberspot,type_) VALUES(2,1);
INSERT INTO parkingspot(numberspot,type_) VALUES(3,1);
INSERT INTO parkingspot(numberspot,type_) VALUES(4,1);
INSERT INTO parkingspot(numberspot,type_) VALUES(5,1);
INSERT INTO parkingspot(numberspot,type_) VALUES(6,1);
INSERT INTO parkingspot(numberspot,type_) VALUES(7,1);
INSERT INTO parkingspot(numberspot,type_) VALUES(8,1);
INSERT INTO parkingspot(numberspot,type_) VALUES(9,1);


INSERT INTO customer(name, surname,phone) values('Ethan','Joyce','(598) 599-7850');
INSERT INTO customer(name, surname,phone) values('Aphrodite','Davidson','(677) 443-1227');
INSERT INTO customer(name, surname,phone) values('Quemby','Horton','(150) 733-4266');
INSERT INTO customer(name, surname,phone) values('Erich','Fox','(689) 308-1646');
INSERT INTO customer(name, surname,phone) values('Carlos','Dillon','(355) 870-9803');
INSERT INTO customer(name, surname,phone) values('Willow','Soto','(835) 249-3259');
INSERT INTO customer(name, surname,phone) values('Lee','Bray','(287) 613-4529');
INSERT INTO customer(name, surname,phone) values('Victor','Brown','(779) 551-1667');
INSERT INTO customer(name, surname,phone) values('Anastasia','Gonzales','(876) 957-9788');
INSERT INTO customer(name, surname,phone) values('Ella','Guy','(859) 745-8187');
INSERT INTO customer(name, surname,phone) values('Yeo','Morrow','(287) 691-2834');
INSERT INTO customer(name, surname,phone) values('Timothy','Burns','(421) 920-5036');
INSERT INTO customer(name, surname,phone) values('Malachi','Hendrix','(387) 250-8801');
INSERT INTO customer(name, surname,phone) values('Dolan','Levy','(686) 299-8439');
INSERT INTO customer(name, surname,phone) values('Tatum','Francis','(929) 201-6806');
INSERT INTO customer(name, surname,phone) values('Jasmine','Pope','(653) 380-7894');
INSERT INTO customer(name, surname,phone) values('Kameko','Guerra','(586) 126-9694');
INSERT INTO customer(name, surname,phone) values('Jillian','Santiago','(499) 971-4137');
INSERT INTO customer(name, surname,phone) values('Fredericka','Ross','(133) 955-9772');
INSERT INTO customer(name, surname,phone) values('Jasper','Fields','(768) 544-7445');
INSERT INTO customer(name, surname,phone) values('Shannon','Harmon','(882) 718-2589');


INSERT INTO mark (title, model) VALUES('Toyota', 'Corolla');
INSERT INTO mark (title, model) VALUES('Toyota', 'Camry');
INSERT INTO mark (title, model) VALUES('Toyota', 'RAV4');
INSERT INTO mark (title, model) VALUES('Toyota', 'Supra');


insert into car(numbercar,customer,mark) VALUES('A243BN', 1,1);
insert into car(numbercar,customer,mark) VALUES('A233BN', 1,1);
insert into car(numbercar,customer,mark) VALUES('A253BN', 1,1);
insert into car(numbercar,customer,mark) VALUES('A263BN', 1,1);
insert into car(numbercar,customer,mark) VALUES('A273BN', 1,1);




INSERT INTO registration(car, parkingspot, date_of_entry, date_of_depature) VALUES(1,1, '12.12.2020', '13.12.2020');

