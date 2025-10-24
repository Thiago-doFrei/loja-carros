import { useState } from "react";
import Cabecalho from "../../components/cabecalho/cabecalho";
import "./inicio.scss";

export default function Inicio() {
  const [dados, setDados] = useState({
    preco: "",
    desconto: "",
    parcelas: "",
  });

  function mudarValor(e) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  }

  function calcular() {
    const { preco, desconto, parcelas } = dados;

    if (!preco || !desconto || !parcelas) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    const precoNum = parseFloat(preco);
    const descontoNum = parseFloat(desconto);
    const parcelasNum = parseInt(parcelas);

    const total = precoNum - descontoNum;
    const valorParcela = total / parcelasNum;

    alert(
      `Valor final: R$ ${total.toFixed(2)}\nValor por parcela: R$ ${valorParcela.toFixed(2)}`
    );
  }

  return (
    <>
      <Cabecalho />

      <div className="tabela">
        <img src="/images/maserati.png" alt="Carro" width={400} />

        <div className="informacoes">
          <h1>Simulador</h1>

          <div>
            <h3>VALOR DO CARRO</h3>
            <input
              type="number"
              name="preco"
              placeholder="Valor"
              value={dados.preco}
              onChange={mudarValor}
            />
          </div>

          <div>
            <h3>DESCONTO</h3>
            <input
              type="number"
              name="desconto"
              placeholder="Desconto"
              value={dados.desconto}
              onChange={mudarValor}
            />
          </div>

          <div>
            <h3>PARCELAS</h3>
            <input
              type="number"
              name="parcelas"
              placeholder="Parcelas"
              value={dados.parcelas}
              onChange={mudarValor}
            />
          </div>

          <button onClick={calcular}>CALCULAR</button>
        </div>
      </div>
    </>
  );
}
