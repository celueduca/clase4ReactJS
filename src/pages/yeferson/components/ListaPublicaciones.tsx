
import {Ipublicacion} from "../interfaces/Ipublicaion";

interface Props{

    publicaciones:Ipublicacion[];
    publicacion:Ipublicacion;
    setPublicaciones:any;
    idex:number;

}
const ListaPublicaciones = ({publicaciones, setPublicaciones, publicacion, idex} : Props) => {

    let likes:number = 0;
    const addLike = (index:number) => {

        const listaPublicaciones:Ipublicacion[] = [...publicaciones];
        listaPublicaciones[index].likes +=1;
        setPublicaciones(listaPublicaciones);
        
        }
    
        const borrarPublicacion = (i: number) => {
            const listPublicaciones: Ipublicacion[] = [...publicaciones];
            listPublicaciones.splice(i, 1);
            setPublicaciones(listPublicaciones);
          };

            
          return (
            <div className="card card-body mt-2">
              <h2>
                {publicacion.mensaje}
              </h2>
              <img src={publicacion.url} alt="observar" />
              <div>
                <button className="btn btn-info" onClick={() => addLike(idex)}>
                  {publicacion.mensaje ? "Like" : "Terminar" }{publicacion.likes}
                </button>
                <button className="btn btn-danger" onClick={() => borrarPublicacion(idex)}>
                  Eliminar
                </button>
              </div>
            </div>
          );
    
}
export default ListaPublicaciones;