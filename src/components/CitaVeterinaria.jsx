import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const CitaVeterinaria = ({ cita ,eliminar,index}) => {
  return (

      <Card className="contenedorCitaItem  col-md-4 col-lg-3 m-1">
        
          <Card.Header className="cardTituloCita ps-3 m-0 ">
            <div className="d-flex d-row  ">
          <div className="bg-primary rounded-5 circuloTitulo  me-4"></div>
          <div className="d-flex flex-column align-self-center ">
            <Card.Title className="fs-5 d-block  ">      
             <div className=""> Mascota: {JSON.stringify(cita.nombreMascota)}</div>
            </Card.Title>
            <Card.Subtitle className="fs-6 fw-lighter d-block ">
              Dueño: {JSON.stringify(cita.nombreDuenio)}
            </Card.Subtitle>
            </div>
            </div>
          </Card.Header>
          <Card.Body className="p-0 m-0 "> 
          <Card.Text className="contenedorDatos w-100 row p-3 m-0 ">
            <div className="p-0 m-0 d-flex d-row mb-2">
            <div className="col-4 fs-6  align-self-center ">Fecha: </div>
             <div className="txtDatos ">{cita.fecha}</div>
            </div>
            <div className="p-0 m-0 d-flex d-row mb-2">
              <div className="col-4 fs-6 align-self-center">Hora: </div><div className="txtDatos ">{cita.hora}</div>
            </div>
            <div className="p-0 m-0 d-flex d-row mb-2">
            <div className="col-4 fs-6 align-self-center">Sintomas: </div>
              <div className="txtDatos ">{cita.sintomas}</div>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className=" m-0 btnEliminar">
        <Button className="primary " onClick={()=>eliminar(index)}>Eliminar</Button>
        </Card.Footer>
      </Card>

  );
};

export default CitaVeterinaria;
