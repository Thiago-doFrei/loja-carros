import { useState } from "react";
import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho/cabecalho";
import "./inicio.scss";

export default function Inicio() {
  const [valorCarro, setValorCarro] = useState("");
  const [desconto, setDesconto] = useState("");
  const [parcelas, setParcelas] = useState("");

  function calculo() {
    if (!valorCarro || !desconto || !parcelas) {
      alert("Preencha todos os campos");
      return;
    }

    const valorComDesconto = valorCarro - (valorCarro * desconto) / 100;
    const valorParcela = valorComDesconto / parcelas;

    alert(
      `Valor final: R$ ${valorComDesconto.toFixed(2)}
Por parcela: R$ ${valorParcela.toFixed(2)}`
    );
  }

  return (
    <>
      <Cabecalho />
      <div className="tabela">

        <img
          src="../../../public/images/carro.png"
          alt="carro"
          width={200}
        />

        <div className="informacoes">
          <h2>Informações</h2>

          <h3>VALOR DO CARRO</h3>
          <input
            type="number"
            placeholder="Valor"
            value={valorCarro}
            onChange={e => setValorCarro(Number(e.target.value))}
          />

          <h3>DESCONTO (%)</h3>
          <input
            type="number"
            placeholder="Desconto"
            value={desconto}
            onChange={e => setDesconto(Number(e.target.value))}
          />

          <h3>QUANTIDADE DE PARCELAS</h3>
          <input
            type="number"
            placeholder="Parcelas"
            value={parcelas}
            onChange={e => setParcelas(Number(e.target.value))}
          />

          <button id="botao_calcular" onClick={calculo}>
            CALCULAR
          </button>
        </div>
      </div>
    </>
  );
}
