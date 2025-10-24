import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho/cabecalho";
import "./sobre.scss"

export default function Sobre(){
    return(
        <>
        <Link to="/">Inicio</Link>
        <Cabecalho/>
        <div className="sobre">
        <h1>Sobre nós</h1>
        <p>
Esta plataforma foi desenvolvida com o propósito de facilitar a sua vida e oferecer uma forma prática e intuitiva de entender melhor os custos reais do seu veículo. <br></br>
Aqui, você pode utilizar nossa calculadora inteligente para estimar seus gastos de forma simples e rápida — basta inserir as informações sobre o seu carro, como consumo, manutenção, impostos e outros detalhes que desejar acompanhar.<br></br>

Com base nos dados informados, o sistema ajudará você a visualizar o custo total de uso do seu automóvel, permitindo uma análise mais completa sobre quanto ele realmente representa no seu orçamento.<br></br>

Nosso objetivo é proporcionar mais transparência, controle e consciência financeira para que você possa tomar decisões mais informadas sobre o seu veículo.</p>
</div>
<div className="card">
    <img src="../../../public/images/carro.png" alt="carro" width={70} />
    <h2>Desenvolvido pelo aluno x da turma x</h2>
</div>
        </>
    )
}