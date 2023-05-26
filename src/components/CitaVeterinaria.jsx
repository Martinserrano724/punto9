import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const CitaVeterinaria = ({ cita ,eliminar,index}) => {
  return (
    <div>
      <Card className="contenedorCitaItem ">
        
          <Card.Header className="cardTituloCita ps-3 m-0 ">
            <div className="d-flex d-row">
          <div className="bg-primary rounded-5 circuloTitulo "></div>
          <div className="d-flex flex-column align-self-center">
            <Card.Title className="fs-5 d-block">      
             <div className=""> Mascota: {JSON.stringify(cita.nombreMascota)}</div>
            </Card.Title>
            <Card.Subtitle className="fs-6 fw-lighter d-block">
              Dueño: {JSON.stringify(cita.nombreDuenio)}
            </Card.Subtitle>
            </div>
            </div>
          </Card.Header>
          <Card.Body className="p-0 m-0"> 
          <Card.Text className="contenedorDatos w-100 row p-3 m-0 ">
            <div className="p-0 m-0 d-flex d-row">
            <div className="col-3 fs-6  align-self-center">Fecha: </div>
             <div className="txtDatos ">{cita.fecha}</div>
            </div>
            <div className="p-0 m-0 d-flex d-row">
              <div className="col-3 fs-6 align-self-center">Hora: </div><div className="txtDatos ">{cita.hora}</div>
            </div>
            <div className="p-0 m-0 d-flex d-row">
            <div className="col-3 fs-6 align-self-center">Sintomas: </div>
              <div className="txtDatos ">{cita.sintomas}</div>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="p-0 m-0 d-flex d-row">
        <Button className="primary" onClick={()=>eliminar(index)}>Eliminar</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CitaVeterinaria;
