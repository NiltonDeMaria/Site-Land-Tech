import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import CmsApi from '../api/CmsApi'

function Login() {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const email = form.elements.Email.value
        const senha = form.elements.Senha.value

        const retorno = await CmsApi().login(email, senha)
        if(!retorno.ok){
            alert('Não foi possível realizar o login')
            return
        }

        const dados = await retorno.json()
        localStorage.setItem('token', dados.token)
        window.location.href = '/admin/funcionalidades'
    }

    return (
            <Container className="conteudo-margin form-container">
      <br></br>
        <h1>Login</h1>
        <br></br>

                <Form onSubmit={handleSubmit} className="form-login">
                    <Form.Group className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <br></br>
          <input type="text" placeholder="Digite seu email" id="Email"></input>
                </Form.Group>
                <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <br></br>
          <input type="password" placeholder="Digite sua senha" id="Senha"></input>
                    
                </Form.Group>
        
        <Form.Group>
          <div className="bg-button">
            <input type={"submit"} value={"Entrar"} />
          </div>
        </Form.Group>
      </Form>
        </Container>
    )
}

export default Login