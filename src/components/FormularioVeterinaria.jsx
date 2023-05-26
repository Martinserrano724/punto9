import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaVeterinaria from "./listaVeterinaria";
import Swal from 'sweetalert2'

const FormularioVeterinaria = () => {
  let citasLocalStorage = JSON.parse(localStorage.getItem("listaCitas")) || [];

  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [arrayCitas, setArrayCitas] = useState(citasLocalStorage);
  let veterinaria={nombreMascota:'',nombreDueni:'',fecha:'',hora:'',sintomas:''}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validaciones() == "") {
      Swal.fire({
          title: 'Formulario',
          text: 'Datos Enviados',
          icon: 'success',
        })
    veterinaria={nombreMascota,nombreDuenio,fecha,hora,sintomas}
    setArrayCitas([...arrayCitas,veterinaria]);
    setFecha("");
    setNombreDuenio("");
    setNombreMascota("");
    setHora("");
    setSintomas("");
      }
      else {
        Swal.fire({
          title: 'ERROR',
          text: `${validaciones()}`,
          icon: 'error',
        })
      }
  };

  useEffect(() => {
    //se ejecuta en las montadas de domm
    localStorage.setItem("listaCitas", JSON.stringify(arrayCitas));
  }, [arrayCitas]);

  const eliminarCita = (idCita) => {
    let posicionCita = idCita;
    console.log(`posicion: ${posicionCita}` );

    let citasFiltradas = arrayCitas.filter((itemCita, index) => {
      if (index != posicionCita) {
        return itemCita;
      }
    });
    setArrayCitas(citasFiltradas);
  
  };
  const valicacionTextoInput = (texto) => {
    if (texto != "" && texto.length < 100) {
      return true;
    } else {
      return false;
    }
  };
  const validaciones = () => {
    let validacion = "";
    if (!valicacionTextoInput(nombreMascota)) {
      validacion += "ERROR Nombre Mascota \n ";
    }
    if (!valicacionTextoInput(nombreDuenio)) {
      validacion += "ERROR Nombre Dueño incorrecto \n ";
    }
    if (!fecha>='25/05/2023') {
      validacion += "ERROR fecha incorrecto \n ";
    }
    if (!valicacionTextoInput(sintomas)) {
      validacion += "ERROR mail incorrecto \n";
    }
    if (hora>8 && hora<17){
      validacion += "ERROR Hora incorrecto \n horario de atencion: de 08 a 17 \n";
    }

    return validacion;
  };

  return (
    <div className=" p-5 ps-0 pe-0  body h-100">
      <h2 className="text-center mb-4">
        Administrador pacientes de veterinaria
      </h2>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit} className="p-0">
          <Card>
            <Card.Header>Llenar el formulario para crear una cita </Card.Header>
            <Card.Body className="p-0">
              <Card.Text className="contenedorForm ">
                <Form.Group className="mb-2 ps-3 pe-5  d-flex flex-row ">
                  <Form.Label className="col-4 align-self-center">
                    Nombre de Mascota:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ingrese un Nombre de Mascota"
                    onChange={(e) => setNombreMascota(e.target.value)}
                    value={nombreMascota}
                    className=" w-100"
                    maxLength={100}
                    minLength={1}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2 ps-3 pe-5 d-flex flex-row">
                  <Form.Label className="col-4 align-self-center">
                    Nombre dueño:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ingrese el nombre del dueño"
                    onChange={(e) => setNombreDuenio(e.target.value)}
                    value={nombreDuenio}
                    className="w-100"
                    maxLength={100}
                    minLength={1}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2 ps-3 pe-5  d-flex flex-row  text-center">
                  <Form.Label className="col-4 text-start align-self-center">
                    Fecha:
                  </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="ej: 25/05/2023"
                    onChange={(e) => setFecha(e.target.value)}
                    value={fecha}
                    className="w-50"
                  />

                  <Form.Label className="col-2 align-self-center">
                    Hora:
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="hh:mm"
                    onChange={(e) => setHora(e.target.value)}
                    value={hora}
                    className="w-25"
                    min={8}
                    max={17}
                  />
                </Form.Group>
                <Form.Group className=" ps-3 pe-5  d-flex flex-row">
                  <Form.Label className="col-4 align-self-center">
                    Sintomas:{" "}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="describir los sintomas"
                    onChange={(e) => setSintomas(e.target.value)}
                    value={sintomas}
                    maxLength={100}
                    minLength={1}
                    required
                  />
                </Form.Group>
              </Card.Text>
              <Card.Footer className="d-flex justify-content-center">
                <Button type="submit">Agregar Nueva Cita</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Form>
      </div>
      <hr />
      <h3 className="text-center">Administra las citas Aqui</h3>
      <div className="">  <ListaVeterinaria citas={arrayCitas} eliminar={eliminarCita}></ListaVeterinaria></div>
    
    </div>
  );
};

export default FormularioVeterinaria;
