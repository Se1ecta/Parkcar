CREATE TABLE public.customer (
    id_customer SERIAL NOT NULL,
    name text NOT NULL,
    surname text NOT NULL,
    phone varchar NOT NULL,
    date_register TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (id_customer)
);

ALTER TABLE public.customer
    ADD UNIQUE (phone);


CREATE TABLE public.car (
    id_car SERIAL NOT NULL,
    customer integer NOT NULL,
    mark integer NOT NULL,
    numbercar text NOT NULL,
    PRIMARY KEY (id_car)
);

ALTER TABLE public.car
    ADD UNIQUE (numbercar);

CREATE INDEX ON public.car
    (customer);
CREATE INDEX ON public.car
    (mark);


CREATE TABLE public.registration (
    id_registration SERIAL NOT NULL,
    car integer NOT NULL,
    parkingspot integer NOT NULL,
    date_of_entry TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_of_depature date,
    PRIMARY KEY (id_registration)
);

ALTER TABLE public.registration
    ADD UNIQUE (car, parkingspot);


CREATE TABLE public.parkingspot (
    id_parkingspot SERIAL NOT NULL,
    numberspot integer NOT NULL,
    type_ integer,
    PRIMARY KEY (id_parkingspot)
);

CREATE INDEX ON public.parkingspot
    (type_);


CREATE TABLE public.tarif (
    id_tarif SERIAL NOT NULL,
    title text NOT NULL,
    parkingtime time without time zone NOT NULL,
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
    typepayment integer NOT NULL,
    tarif integer NOT NULL,
    price real NOT NULL,
    registration integer NOT NULL,
    PRIMARY KEY (id_parkingticket)
);

CREATE INDEX ON public.parkingticket
    (typepayment);
CREATE INDEX ON public.parkingticket
    (tarif);
CREATE INDEX ON public.parkingticket
    (registration);


CREATE TABLE public.typepayment (
    id_payment SERIAL NOT NULL,
    title text NOT NULL,
    PRIMARY KEY (id_payment)
);


CREATE TABLE public.typespot (
    id_typespot SERIAL NOT NULL,
    title text NOT NULL,
    description text,
    PRIMARY KEY (id_typespot)
);


ALTER TABLE public.registration ADD CONSTRAINT FK_registration__car FOREIGN KEY (car) REFERENCES public.car(id_car);
ALTER TABLE public.registration ADD CONSTRAINT FK_registration__parkingspot FOREIGN KEY (parkingspot) REFERENCES public.parkingspot(id_parkingspot);
ALTER TABLE public.parkingspot ADD CONSTRAINT FK_parkingspot__type_ FOREIGN KEY (type_) REFERENCES public.typespot(id_typespot);
ALTER TABLE public.parkingticket ADD CONSTRAINT FK_parkingticket__typepayment FOREIGN KEY (typepayment) REFERENCES public.typepayment(id_payment);
ALTER TABLE public.parkingticket ADD CONSTRAINT FK_parkingticket__registration FOREIGN KEY (registration) REFERENCES public.registration(id_registration);