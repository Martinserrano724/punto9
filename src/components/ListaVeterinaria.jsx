import React from 'react';
import CitaVeterinaria from './CitaVeterinaria';

const ListaVeterinaria = ({citas,eliminar}) => {
    return (
       < div className='container-fluid'>
        <div className="row d-flex justify-content-evenly align-items-center">
           { citas.map((cita,index)=>{          
           return <CitaVeterinaria  className='h-100' cita={cita} key={index} eliminar={eliminar} index={index}></CitaVeterinaria>})}
        </div>
        </div>
      
    );
};

export default ListaVeterinaria;