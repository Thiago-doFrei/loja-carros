import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Sobre from "./pages/sobre/sobre";
import Cabecalho from "./components/cabecalho/cabecalho";

export default function Navegar() {

    return(
        <BrowserRouter>
       < Routes>
       <Route path="/" element = {<Inicio/>}/>
       <Route path="/sobre" element = {<Sobre/>}/>
       </Routes>
        </BrowserRouter>
        
    )

}