CREATE TABLE public.customer (
    id_customer SERIAL NOT NULL,
    name text NOT NULL,
    surname text NOT NULL,
    phone varchar NOT NULL UNIQUE,
    date_register DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY (id_customer)
);



CREATE TABLE public.car (
    id_car SERIAL NOT NULL,
    customer integer NOT NULL,
    mark integer NOT NULL,
    numbercar text NOT NULL UNIQUE,
    PRIMARY KEY (id_car)
);

CREATE INDEX ON public.car
    (customer);
CREATE INDEX ON public.car
    (mark);


CREATE TABLE public.regisration (
    id_regisration SERIAL NOT NULL,
    car integer NOT NULL,
    parkingspot integer NOT NULL,
    dateenter date NOT NULL,
    dateout date NOT NULL,
    parkingticket integer NOT NULL,
    employee integer NOT NULL,
    PRIMARY KEY (id_regisration)
);

CREATE INDEX ON public.regisration
    (car);
CREATE INDEX ON public.regisration
    (parkingspot);
CREATE INDEX ON public.regisration
    (parkingticket);
CREATE INDEX ON public.regisration
    (employee);


CREATE TABLE public.parkingspot (
    id_parkingspot SERIAL NOT NULL,
    numberspot integer NOT NULL,
    type integer NOT NULL,
    PRIMARY KEY (id_parkingspot)
);

CREATE INDEX ON public.parkingspot
    (type);


CREATE TABLE public.employee (
    id_employee SERIAL NOT NULL,
    name text NOT NULL,
    surname text NOT NULL,
    position integer NOT NULL,
    phone varchar NOT NULL,
    address text NOT NULL,
    PRIMARY KEY (id_employee)
);

CREATE INDEX ON public.employee
    (position);


CREATE TABLE public.tarif (
    id_tarif SERIAL NOT NULL,
    title text NOT NULL,
    price real NOT NULL,
    description text,
    PRIMARY KEY (id_tarif)
);


CREATE TABLE public.mark (
    id_mark SERIAL NOT NULL,
    title text NOT NULL,
    model text NOT NULL,
    description text,
    PRIMARY KEY (id_mark)
);


CREATE TABLE public.parkingticket (
    id_parkingticket SERIAL NOT NULL,
    issuedat date NOT NULL,
    payedat date NOT NULL,
    payment integer NOT NULL,
    tarif integer NOT NULL,
    price real NOT NULL,
    PRIMARY KEY (id_parkingticket)
);

CREATE INDEX ON public.parkingticket
    (payment);
CREATE INDEX ON public.parkingticket
    (tarif);


CREATE TABLE public.payment (
    id_payment SERIAL NOT NULL,
    type text NOT NULL,
    status text NOT NULL,
    PRIMARY KEY (id_payment)
);


CREATE TABLE public.position (
    id_position SERIAL NOT NULL,
    position text NOT NULL,
    salary real NOT NULL,
    PRIMARY KEY (id_position)
);


CREATE TABLE public.typespot (
    id_typespot SERIAL NOT NULL,
    title text NOT NULL,
    description text,
    PRIMARY KEY (id_typespot)
);


ALTER TABLE public.customer ADD CONSTRAINT FK_customer__parkingticket FOREIGN KEY (parkingticket) REFERENCES public.parkingticket(id_parkingticket);
ALTER TABLE public.regisration ADD CONSTRAINT FK_regisration__car FOREIGN KEY (car) REFERENCES public.car(id_car);
ALTER TABLE public.regisration ADD CONSTRAINT FK_regisration__parkingspot FOREIGN KEY (parkingspot) REFERENCES public.parkingspot(id_parkingspot) ;
ALTER TABLE public.regisration ADD CONSTRAINT FK_regisration__parkingticket FOREIGN KEY (parkingticket) REFERENCES public.parkingticket(id_parkingticket);
ALTER TABLE public.regisration ADD CONSTRAINT FK_regisration__employee FOREIGN KEY (employee) REFERENCES public.employee(id_employee);
ALTER TABLE public.parkingspot ADD CONSTRAINT FK_parkingspot__type FOREIGN KEY (type) REFERENCES public.typespot(id_typespot) ON UPDATE CASCADE;
ALTER TABLE public.employee ADD CONSTRAINT FK_employee__position FOREIGN KEY (position) REFERENCES public.position(id_position);
ALTER TABLE public.parkingticket ADD CONSTRAINT FK_parkingticket__payment FOREIGN KEY (payment) REFERENCES public.payment(id_payment);


INSERT INTO customer(name, surname , phone, parkingticket) VALUES ('test', 'test', '1283023480392');
