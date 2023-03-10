import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Depoimentos from "../components/Depoimentos";
import { useEffect, useState } from "react";
import CmsApi from "../api/CmsApi";
import ImgApp from "./img/gif-app.gif";
import ImgEmp from "./img/gif-empresa.gif";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Sobre() {
  const [sobre, setSobre] = useState([]);

  useEffect(() => {
    async function getSobre() {
      const response = await CmsApi().getSobre();
      const sobre = await response.json();
      setSobre(sobre.data);
    }

    getSobre();
  }, []);

  return (
    <>
      <Container className="conteudo-margin">
        <div className="flex-container">
          <div className="item01">
            <h1>Land Tech</h1>
            <h5>Aplicativo</h5>
            <p>{sobre.text}</p>
          </div>
          <div className="item02">
            <img src={ImgApp} alt="dica 1" width={300} height={300} />
          </div>
        </div>

        <div className="flex-container2">
          <div className="item02">
            <img src={ImgEmp} alt="dica 1" width={300} height={300} />
          </div>

          <div className="item11">
            <h1>Indigo Tech</h1>
            <h5>Empresa</h5>
            <p>
              Criada com o propósito de inovar e atender as demandas do mercado
              tecnológico, a Indigo Tech é uma empresa especializada em criação
              de soluções tech.{" "}
            </p>
            <p>
              Somos uma empresa nova no mercado, fundada no ano de 2022, na
              cidade do Rio de Janeiro, por um grupo de amigos que tem o sonho
              de impactar positivamente o mundo que conhecemos, com uma
              ferramenta tecnológica de cada vez.{" "}
            </p>
            <p>
              Nossa equipe conta com devs, qualificados, habils e
              espelicializados nas diversas linguagens de programação, afim de,
              entregar projetos inovadores e funcionais.{" "}
            </p>
            <p>
              Como dizem por aí " O futuro é tech", queremos fazer parte de
              futuro tecnológico.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Sobre;
