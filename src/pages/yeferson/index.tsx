import React, { Fragment, useState } from 'react'
import {Ipublicacion} from "./interfaces/Ipublicaion";
import Formulario  from "./components/Formulario";
import ListaPublicaciones from "./components/ListaPublicaciones";


const Yeferson = () => {

    const [publicaciones , setPublicaciones] = useState<Ipublicacion[]>([]);

    return(

        <Fragment>
            
            <h2> HOLA SOY YEFERSON</h2>
            <Formulario publicaciones={publicaciones} setPublicaciones={setPublicaciones} />
            {publicaciones.map( ( publicacion:Ipublicacion , i:number ) => (
                <ListaPublicaciones key={i} publicaciones={publicaciones} setPublicaciones={setPublicaciones}  publicacion={publicacion} idex={i} />
            )) }

        


        </Fragment>

    );

   
    
}

export default Yeferson