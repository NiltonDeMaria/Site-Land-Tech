import { Container, Button, Form } from "react-bootstrap";
import Depoimentos from "../components/Depoimentos";

function Contato() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    event.target.reset();
  };

  return (
    <Container className="conteudo-margin form-container">
      <br></br>
      <h1>Contato</h1>
      <p className="text">Entre em contato conosco</p>

      <Form onSubmit={handleSubmit} className="form-contato">
        <Form.Group className="mb-3" controlId="Nome">
          <Form.Label>Nome</Form.Label>
          <br></br>
          <input type="text" placeholder="Digite seu nome completo"></input>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>E-mail</Form.Label>
          <br></br>
          <input type="text" placeholder="Digite seu e-mail"></input>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Mensagem">
          <Form.Label>Mensagem</Form.Label>
          <br></br>
          <textarea rows={5} placeholder="Digite sua mensagem"></textarea>
        </Form.Group>
        <Form.Group>
          <div className="bg-button">
            <input type={"submit"} value={"Enviar"} />
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Contato;
