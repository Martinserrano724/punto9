import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const FormularioVeterinaria = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" p-5 ps-0 pe-0 container ">
         <h2 className="text-center mb-4">Administrador pacientes de veterinaria</h2>
        <div className="d-flex justify-content-center">
           
          <Form onSubmit={handleSubmit} className="p-0">
            <Card>
            <Card.Header>Llenar el formulario para crear una cita </Card.Header>
              <Card.Body className="p-0" >
                <Card.Text className="contenedorForm" >
                  <Form.Group className="mb-2 ps-3 pe-5  d-flex flex-row">
                    <Form.Label className="col-4">
                      Nombre de Mascota{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ingrese un Nombre de Mascota"
                      onChange={(e) => setNombreMascota(e.target.value)}
                      value={nombreMascota}
                      className=" w-100"
                    />
                  </Form.Group>
                  <Form.Group className="mb-2 ps-3 pe-5 d-flex flex-row">
                    <Form.Label className="col-4">Nombre dueño</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ingrese el nombre del dueño"
                      onChange={(e) => setNombreDuenio(e.target.value)}
                      value={nombreDuenio}
                      className="w-100"
                    />
                  </Form.Group>
                  <Form.Group className="mb-2 ps-3 pe-5  d-flex flex-row  text-center">
                    <Form.Label className="col-4 text-start">fecha</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ej: 25/05/2023"
                      onChange={(e) => setFecha(e.target.value)}
                      value={fecha}
                      className="w-25"
                    />

                    <Form.Label className="col-2">hora</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="hh:mm"
                      onChange={(e) => setHora(e.target.value)}
                      value={hora}
                    />
                  </Form.Group>
                  <Form.Group className=" ps-3 pe-5  d-flex flex-row">
                    <Form.Label className="col-4">Sintomas: </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="describir los sintomas"
                      onChange={(e) => setSintomas(e.target.value)}
                      value={sintomas}
                    />
                  </Form.Group>
                </Card.Text>
                <Card.Footer className="d-flex justify-content-center">
                    <Button  type="submit">
                      Agregar Nueva Cita
                    </Button>
       
                </Card.Footer>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </div>
  
  );
};

export default FormularioVeterinaria;
