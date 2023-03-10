import { Row, Col, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ImgLogin from "./img/login.png";
import ImgCadastro from "./img/cadastro.png";
import ImgHome from "./img/home.png";
import ImgHome2 from "./img/home2.png";
import ImgLista from "./img/lista.png";
import ImgDados from "./img/dados.png";
import ImgPolitica from "./img/politica.png";

function Telas() {
  return (
    <>
      <h1>Conheça as telas do nosso Mobile App </h1>
      <Row className="mt-2">
        <Col className="mt-2" sm="12" md="3">
          <Card className="img-telas">
            <Card.Img variant="top" src={ImgLogin} />
            <Card.Body>
              <Card.Title> Soft Experience </Card.Title>
              <Card.Text>
                Utilizando uma paleta de cores soft, nosso objetivo é trazer uma
                experiência agradável para todos os usuários.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2" sm="12" md="3">
          <Card className="img-telas">
            <Card.Img variant="top" src={ImgCadastro} />
            <Card.Body>
              <Card.Title>Rápido e confiável </Card.Title>
              <Card.Text>
                O cadastro no aplicativo pode ser feita de forma rápida, as
                informações necessárias são as essenciais para uma melhor
                experiência.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2" sm="12" md="3">
          <Card className="img-telas">
            <Card.Img variant="top" src={ImgHome} />
            <Card.Body>
              <Card.Title>Intuitivo e Direto</Card.Title>
              <Card.Text>
                Metodologia ágil na área de TI é primordial com isso em mente
                nosso design é obtivo para não causar distrações durante seu
                estudo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2" sm="12" md="3">
          <Card className="img-telas">
            <Card.Img variant="top" src={ImgHome2} />
            <Card.Body>
              <Card.Title>Start Preciso</Card.Title>
              <Card.Text>
                As trilhas de aprendizado permitem que o início do estudo seja
                feita de maneira precisa para que você possa atingir seu
                objetivo mais rápido.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2" sm="12" md="3">
          <Card className="img-telas">
            <Card.Img variant="top" src={ImgLista} />
            <Card.Body>
              <Card.Title> Direto ao Ponto</Card.Title>
              <Card.Text>
                A nossa missão é ajudar os usuários a se organizar melhor,
                permitindo a possibilidade de atualizar seu progresso durante
                sua caminhada.
                <p></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2" sm="12" md="3">
          <Card className="img-telas">
            <Card.Img variant="top" src={ImgDados} />
            <Card.Body>
              <Card.Title>Controle e Segurança</Card.Title>
              <Card.Text>
                Nós, da Indigo Tech acreditamos que o controle dos seus dados
                deva ser sigiloso, com segurança e suporte, com opção para
                retirar/alterar suas informações no Aplicativo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2" sm="12" md="3">
          <Card className="img-telas">
            <Card.Img variant="top" src={ImgPolitica} />
            <Card.Body>
              <Card.Title> Clareza</Card.Title>
              <Card.Text>
                O usuário poderá ter acesso a qualquer momento a nossa política
                de privacidade
                <p>
                  <br></br>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Telas;
