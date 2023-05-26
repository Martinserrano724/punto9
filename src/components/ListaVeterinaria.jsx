import React from 'react';
import CitaVeterinaria from './CitaVeterinaria';

const ListaVeterinaria = ({citas,eliminar}) => {
    return (
        <div>
           { citas.map((cita,index)=>{
                   
           return <CitaVeterinaria cita={cita} key={index} eliminar={eliminar} index={index}></CitaVeterinaria>})}
        </div>
    );
};

export default ListaVeterinaria;