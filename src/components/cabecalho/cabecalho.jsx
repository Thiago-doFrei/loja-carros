import "./cabecalho.scss"
    export default function Cabecalho(){
    return(
        <>
        <div className="a">
            <div className="logo">
            <img src="../../../public/images/carro.png" alt="carro" width={70} />
            <h1>Calculadora Auto</h1>
            </div>
            <div className="botao">
            <button>Calc</button>
            <button>Sobre</button>
            </div>

        </div>
        </>
    )
}