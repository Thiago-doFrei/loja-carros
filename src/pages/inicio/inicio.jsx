import { Link } from "react-router-dom"
import Cabecalho from "../../components/cabecalho/cabecalho"
import "./inicio.scss"

export default function Inicio(){
    return(
        <>
        <Link to="/sobre">sobre</Link>
        <Cabecalho/>
        <div className="tabela">

            <img src="../../../public/images/carro.png" alt="carro" width={200} />


            <div className="informacoes">
                
                <h2>Informações</h2>

                <h3>VALOR DO CARRO</h3>
                <input type="text" />

                <h3>DESCONTO</h3>
                <input type="text" />

                <h3>QUANTIDADE DE PARCELAS</h3>
                <input type="text" />

                <button id="botao_calcular">CALCULAR</button>
            </div>
        </div>
        </>
    )
}