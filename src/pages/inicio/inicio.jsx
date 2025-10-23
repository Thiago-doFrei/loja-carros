import { Link } from "react-router-dom"
import Cabecalho from "../../components/cabecalho/cabecalho"

export default function Inicio(){
    return(
        <>
        <Cabecalho/>
        <Link to="/sobre">sobre</Link>
        <div>
            
        </div>
        </>
    )
}