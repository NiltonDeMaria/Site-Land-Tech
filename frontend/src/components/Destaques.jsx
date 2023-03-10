import { Row, Col, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ImgProg from "./img/progcarioca.png";
import ImgResilia from "./img/resilia.png";
import ImgBradesco from "./img/bradesco.png";

function Destaques() {
   return (
      <div className="card-cursos">
      <Row className="mt-2">
         <Col className="mt-2" sm="12" md="4">
            <Card>
               <Card.Img
                  width={300}
                  height={400}
                  variant="top"
                  src={ImgBradesco}
               />
               <Card.Body>
                  <Card.Title>Administrando Banco de Dados</Card.Title>
                  <Card.Text>
                     Você conhecerá os conceitos que fazem parte do dia a dia de
                     um administrador de banco de dados, os modelos de dados,
                     SQL, esquemas, instâncias, tabelas e todo esse fascinante
                     universo que envolve os bancos de dados.
                  </Card.Text>
                  <Card.Link href="https://www.ev.org.br/cursos/administrando-banco-de-dados" target="_blank">
                  <div className="bg-button">

                     <input type={"button"} value={"Conheça mais"} />
                  </div>
                  </Card.Link>
               </Card.Body>
            </Card>
         </Col>
         <Col className="mt-2" sm="12" md="4">
            <Card
           
            >
               <Card.Img
                  width={300}
                  height={400}
                  variant="top"
                  src={ImgProg}
               />
               <Card.Body>
                  <Card.Title>Programadores Cariocas | Senac e Resilia</Card.Title>
                  <Card.Text>
                  O objetivo do curso é oferecer capacitação para jovens em situação de vulnerabilidade, para que eles saiam prontos para o mercado de trabalho. Os cursos serão presenciais com formação em desenvolvedor full-stack, frontend e backend.
                  </Card.Text>
                  <Card.Link href="https://programadorescariocas.rio/" target="_blank">
                  <div className="bg-button">

                     <input type={"button"} value={"Conheça mais"} />
                  </div>
                  </Card.Link>
               </Card.Body>
            </Card>
         </Col>
         <Col className="mt-2" sm="12" md="4">
            <Card>
               <Card.Img
                  width={300}
                  height={400}
                  variant="top"
                  src={ImgResilia}
               />
               <Card.Body>
                  <Card.Title>Aprender a aprender com GitHub | Resilia</Card.Title>
                  <Card.Text>
                  Cursos de curta duração com foco na parte técnica e com certificado para potencializar a sua carreira.
                  Juntamente com a Resilia, preparamos este curso para que você entenda a importância de aprender a aprender. 
                  </Card.Text>
                  <Card.Link href="https://plataforma.potenciatech.com.br/play/curso/63713171" target="_blank">
                  <div className="bg-button">

                     <input type={"button"} value={"Conheça mais"} />
                  </div>
                  </Card.Link>
               </Card.Body>
            </Card>
         </Col>
      </Row>
      </div>
   );
}

export default Destaques;
