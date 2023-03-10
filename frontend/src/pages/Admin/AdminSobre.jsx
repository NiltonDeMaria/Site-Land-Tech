import {Container, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import CmsApi from '../../api/CmsApi'

function AdminSobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    function handleTextChange(event) {
        const text = event.target.value
        setSobre({...sobre, text})
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const text = form.text.value

        const response = await CmsApi().patchSobre({text})
        if(!response.ok) {
            alert('Erro ao atualizar conteúdo da página Sobre')
            return
        }
        
        alert('Conteúdo da página Sobre atualizado com sucesso!')
    }

    return (
        <Container className="conteudo-margin">
            <br></br>
            <br></br>
            <h1>Admin Sobre</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Conteúdo sobre o Aplicativo</Form.Label>
                    <br></br>
          <textarea rows={5} placeholder="Digite seu texto" className='textarea-sobre' value={sobre.text} id="text" onChange={handleTextChange}></textarea>
            
                </Form.Group>
                <Form.Group>
          <div className="bg-button">
            <input type={"submit"} value={"Atualizar o texto"} />
          </div>
        </Form.Group>
            </Form>            
        </Container>
    )
}

export default AdminSobre