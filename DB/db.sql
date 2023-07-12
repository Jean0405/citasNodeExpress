CREATE DATABASE db_citas_keanon;

USE db_citas_keanon;

CREATE TABLE
    especialidad (
        esp_id INT AUTO_INCREMENT PRIMARY KEY,
        esp_nombre VARCHAR(20) NOT NULL
    );

CREATE TABLE
    consultorio(
        cons_codigo INT AUTO_INCREMENT PRIMARY KEY,
        cons_nombre VARCHAR(50) NOT NULL
    );

CREATE TABLE
    medico (
        med_nroMatriculaProsional INT PRIMARY KEY,
        med_nombreCompleto VARCHAR(120) NOT NULL,
        med_consultorio INT,
        med_especialidad INT,
        FOREIGN KEY (med_consultorio) REFERENCES consultorio(cons_codigo),
        FOREIGN KEY (med_especialidad) REFERENCES especialidad(esp_id)
    );

CREATE TABLE
    estado_cita(
        estcita_id INT AUTO_INCREMENT PRIMARY KEY,
        estcita_nombre VARCHAR(20) NOT NULL
    );

CREATE TABLE
    cita (
        cit_codigo INT AUTO_INCREMENT PRIMARY KEY,
        cit_fecha DATE NOT NULL,
        cit_estadoCita INT,
        cit_medico INT,
        cit_datosUsuario INT
    );

CREATE TABLE
    usuario(
        usu_id INT AUTO_INCREMENT PRIMARY KEY,
        usu_nombre VARCHAR(50) NOT NULL,
        usu_segdo_nombre_usuar VARCHAR(45),
        usu_primer_apellido_usuar VARCHAR(50) NOT NULL,
        usu_segdo_apellido_usuar VARCHAR(50),
        usu_telefono VARCHAR(50),
        usu_direccion VARCHAR(100),
        usu_email VARCHAR(100),
        usu_tipodoc INT,
        usu_genero INT,
        usu_acudiente INT
    );

CREATE TABLE
    tipo_documento(
        tipdoc_id INT AUTO_INCREMENT PRIMARY KEY,
        tipdoc_nombre VARCHAR(20),
        tipdoc_abreviatura VARCHAR(20)
    );

CREATE TABLE
    genero(
        gen_id INT AUTO_INCREMENT PRIMARY KEY,
        gen_nombre VARCHAR(20),
        gen_abreviatura VARCHAR(20)
    );

CREATE TABLE
    acudiente(
        acu_codigo INT AUTO_INCREMENT PRIMARY KEY,
        acu_nombreCompleto VARCHAR(100) NOT NULL,
        acu_telefono VARCHAR(100) NOT NULL,
        acu_direccion VARCHAR(200) NOT NULL
    );

ALTER TABLE cita
ADD
    CONSTRAINT fk_estcita FOREIGN KEY (cit_estadoCita) REFERENCES estado_cita(estcita_id),
ADD
    CONSTRAINT fk_medico FOREIGN KEY (cit_medico) REFERENCES medico(med_nroMatriculaProsional),
ADD
    CONSTRAINT fk_datosUsuario FOREIGN KEY (cit_datosUsuario) REFERENCES usuario(usu_id);

ALTER TABLE usuario
ADD
    CONSTRAINT fk_tipodoc FOREIGN KEY (usu_tipodoc) REFERENCES tipo_documento(tipdoc_id),
ADD
    CONSTRAINT fk_genero FOREIGN KEY (usu_genero) REFERENCES genero(gen_id),
ADD
    CONSTRAINT fk_acudiente FOREIGN KEY (usu_acudiente) REFERENCES acudiente(acu_codigo);

insert into
    consultorio (cons_nombre)
values ('Recepción 1'), ('Recepción 2'), ('Recepción 3'), ('Pediatria'), ('Pediatria prem'), ('Odontología');

insert into
    genero (gen_nombre, gen_abreviatura)
values ('Masculino', 'M'), ('Femenino', 'F'), ('Otro', 'Otro');

INSERT INTO
    medico (
        med_nroMatriculaProsional,
        med_nombreCompleto,
        med_consultorio,
        med_especialidad
    )
VALUES (111, "David Rojas", 10, 1);

INSERT INTO
    estado_cita (estcita_id, estcita_nombre)
VALUES (2, "aplazada");

INSERT INTO
    tipo_documento (
        tipdoc_nombre,
        tipdoc_abreviatura
    )
VALUES ("Cedula de ciudadania", "CC");

INSERT INTO
    acudiente (
        acu_nombreCompleto,
        acu_telefono,
        acu_direccion
    )
VALUES (
        "Yessenia Olarte Pradilla",
        "3124261084",
        "calle 20"
    );

INSERT INTO
    usuario (
        usu_id,
        usu_nombre,
        usu_segdo_nombre_usuar,
        usu_primer_apellido_usuar,
        usu_segdo_apellido_usuar,
        usu_telefono,
        usu_direccion,
        usu_email,
        usu_tipodoc,
        usu_genero,
        usu_acudiente
    )
VALUES (
        1098817567,
        "Daniela",
        null,
        "Zapata",
        "Mora",
        "3158696969",
        "Parque de los gatos",
        "daniLaMasViral@gmail.com",
        1,
        1,
        1
    );