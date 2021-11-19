import { useState } from "react"
import {Ipublicacion} from "../interfaces/Ipublicaion"

interface Props{

    publicaciones:Ipublicacion[];
    setPublicaciones:any;

}

const Formulario = ({publicaciones , setPublicaciones}: Props) => {

    const [mensaje , setMensaje] = useState<string>("");
    const [url, setUrl] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        addPublicacion(mensaje , url);
        setMensaje("");
        setUrl("");
      };

    const addPublicacion = (mensaje:string , url:string) =>{

        const listaPublicaciones = [...publicaciones,{mensaje,url}];
        setPublicaciones(listaPublicaciones);
    }

    return (

      <div className="card" >
  <div className="card-body">
    <h5 className="card-title">¿Que Desea Publicar?</h5>
    <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                placeholder="Ingrese el mensaje"
                onChange={(e) => setMensaje(e.target.value)}
                value={mensaje}
              ></input>
              <input
                className="form-control"
                placeholder="Ingrese La Url"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              ></input>
    
              <div className="d-grid gap-2 mt-2">
                <button className="btn btn-dark" type="submit" >
                  Guardar
                </button>
              </div>
            </form>
            </div>
            </div>

);
}
export default Formulario;