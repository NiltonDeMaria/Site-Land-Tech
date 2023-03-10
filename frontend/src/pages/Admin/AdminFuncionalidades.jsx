import { Container, Table, Form, Button, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import CmsApi from "../../api/CmsApi";
import Funcionalidades from "./../Funcionalidades";
import { LinkContainer } from "react-router-bootstrap";

function AdminFuncionalidades() {
  const [funcionalidades, setFuncionalidades] = useState([]);

  useEffect(() => {
    async function getFuncionalidades() {
      const response = await CmsApi().getFuncionalidades();
      const funcionalidades = await response.json();
      setFuncionalidades(funcionalidades.data);
    }

    getFuncionalidades();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const curso = form.curso.value;
    const duracao = form.duracao.value;
    const modalidade = form.modalidade.value;
    const plataforma = form.plataforma.value;
    const nivel = form.nivel.value;
    const inicio = form.inicio.value;

    const response = await CmsApi().postFuncionalidade({
      curso,
      duracao,
      modalidade,
      plataforma,
      nivel,
      inicio,
    });
    if (!response.ok) {
      alert("Erro ao cadastrar funcionalidade");
      return;
    }
    const funcionalidade = await response.json();
    alert("Funcionalidade cadastrada com sucesso");
    setFuncionalidades([...funcionalidades, funcionalidade.data]);
    form.reset();
  }

  async function excluirFuncionalidade(id) {
    console.log(id);
    const response = await CmsApi().deleteFuncionalidade(id);
    if (!response.ok) {
      alert("Erro ao excluir funcionalidade");
      return;
    }

    alert("Funcionalidade excluída com sucesso");
    const funcionalidadesAtualizadas = funcionalidades.filter(
      (funcionalidade) => funcionalidade.id !== id
    );
    setFuncionalidades(funcionalidadesAtualizadas);
  }

  function habilitarEdicao(botao, id) {
    botao.innerText = "Salvar";
    botao.classList.remove("btn-primary");
    botao.classList.add("btn-success");
    botao.onclick = (event) => {
      salvarEdicao(event.target, id);
    };

    const linha = botao.parentNode.parentNode;
    const colunaCurso = linha.children[0];
    // Cria um input para o curso
    const inputCurso = document.createElement("input");
    inputCurso.type = "text";
    inputCurso.value = colunaCurso.innerText;
    colunaCurso.innerText = "";
    colunaCurso.appendChild(inputCurso);
    // Cria um input para a duração
    const colunaDuracao = linha.children[1];
    const inputDuracao = document.createElement("input");
    inputDuracao.type = "text";
    inputDuracao.value = colunaDuracao.innerText;
    colunaDuracao.innerText = "";
    colunaDuracao.appendChild(inputDuracao);
    // Cria um input para a modalidade
    const colunaModalidade = linha.children[2];
    const inputModalidade = document.createElement("input");
    inputModalidade.type = "text";
    inputModalidade.value = colunaModalidade.innerText;
    colunaModalidade.innerText = "";
    colunaModalidade.appendChild(inputModalidade);
    // Cria um input para a Plataforma
    const colunaPlataforma = linha.children[3];
    const inputPlataforma = document.createElement("input");
    inputPlataforma.type = "text";
    inputPlataforma.value = colunaPlataforma.innerText;
    colunaPlataforma.innerText = "";
    colunaPlataforma.appendChild(inputPlataforma);
    // Cria um input para a nivel
    const colunaNivel = linha.children[4];
    const inputNivel = document.createElement("input");
    inputNivel.type = "text";
    inputNivel.value = colunaNivel.innerText;
    colunaNivel.innerText = "";
    colunaNivel.appendChild(inputNivel);
    // Cria um input para a inicio
    const colunaInicio = linha.children[5];
    const inputInicio = document.createElement("input");
    inputInicio.type = "text";
    inputInicio.value = colunaInicio.innerText;
    colunaInicio.innerText = "";
    colunaInicio.appendChild(inputInicio);
  }

  async function salvarEdicao(botao, id) {
    const linha = botao.parentNode.parentNode;
    const colunaCurso = linha.children[0];
    const inputCurso = colunaCurso.children[0];
    const colunaDuracao = linha.children[1];
    const inputDuracao = colunaDuracao.children[0];
    const colunaModalidade = linha.children[2];
    const inputModalidade = colunaModalidade.children[0];
    const colunaPlataforma = linha.children[3];
    const inputPlataforma = colunaPlataforma.children[0];
    const colunaNivel = linha.children[4];
    const inputNivel = colunaNivel.children[0];
    const colunaInicio = linha.children[5];
    const inputInicio = colunaInicio.children[0];

    const response = await CmsApi().patchFuncionalidade({
      id: id,
      curso: inputCurso.value,
      duracao: inputDuracao.value,
      modalidade: inputModalidade.value,
      plataforma: inputPlataforma.value,
      nivel: inputNivel.value,
      inicio: inputInicio.value,
    });
    if (!response.ok) {
      alert("Erro ao editar funcionalidade");
      return;
    }
    alert("Funcionalidade editada com sucesso");

    colunaCurso.innerText = inputCurso.value;
    colunaDuracao.innerText = inputDuracao.value;
    colunaModalidade.innerText = inputModalidade.value;
    colunaPlataforma.innerText = inputPlataforma.value;
    colunaNivel.innerText = inputNivel.value;
    colunaInicio.innerText = inputInicio.value;

    botao.innerText = "Editar";
    botao.classList.remove("btn-success");
    botao.classList.add("btn-primary");
  }

  return (
    <Container className="conteudo-margin">
      <br></br>
      <div>
        <h1>Admin Cursos</h1>
        <LinkContainer to="/admin/sobre">
          <div className="bg-button-sobre">
            <input type={"button"} value={"Acessar Admin/Sobre"} />
          </div>
        </LinkContainer>
      </div>
      <hr />
      <h3>Adicionar Cursos</h3>
      <br></br>
      <Form onSubmit={handleSubmit} className="form-cursos">
        <Form.Group className="mb-3">
          <Form.Label>Curso</Form.Label>
          <br></br>
          <input
            type="text"
            placeholder="Digite o nome do curso"
            id="curso"
          ></input>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Duração</Form.Label>
          <br></br>
          <input
            type="text"
            placeholder="Digite a carga horária"
            id="duracao"
          ></input>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Modalidade</Form.Label>
          <br></br>
          <input
            type="text"
            placeholder="Presencial, online ou híbrido?"
            id="modalidade"
          ></input>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Plataforma</Form.Label>
          <br></br>
          <input
            type="text"
            placeholder="Digite o site do curso"
            id="plataforma"
          ></input>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nível</Form.Label>
          <br></br>
          <input
            type="text"
            placeholder="Básico, intermediário ou avançado?"
            id="nivel"
          ></input>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Início</Form.Label>
          <br></br>
          <input
            type="text"
            placeholder="Digite o início do curso"
            id="inicio"
          ></input>
        </Form.Group>
        <Form.Group>
          <div className="bg-button">
            <input type={"submit"} value={"Cadastrar"} />
          </div>
        </Form.Group>
      </Form>
      <hr />
      <p>
        <strong>Lista de Funcionalidades</strong>
      </p>
      <Table striped hover>
        <thead className="borda-cursos">
          <tr className="principal-cursos">
            <th>Curso</th>
            <th>Duração</th>
            <th>Modalidade</th>
            <th>Plataforma</th>
            <th>Nível</th>
            <th>Início</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="borda-cursos">
          {funcionalidades.map((funcionalidade) => (
            <tr key={funcionalidade.id}>
              <td>{funcionalidade.curso}</td>
              <td>{funcionalidade.duracao}</td>
              <td>{funcionalidade.modalidade}</td>
              <td>
                <Nav>
                  <Nav.Item>
                    <Nav.Link target="_blank" href={funcionalidade.plataforma}>
                      <div className="link-cursos">
                        {funcionalidade.plataforma}
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </td>
              <td>{funcionalidade.nivel}</td>
              <td>{funcionalidade.inicio}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={(event) => {
                    habilitarEdicao(event.target, funcionalidade.id);
                  }}
                >
                  Editar
                </Button>
                |
                <Button
                  variant="danger"
                  onClick={() => {
                    excluirFuncionalidade(funcionalidade.id);
                  }}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminFuncionalidades;
