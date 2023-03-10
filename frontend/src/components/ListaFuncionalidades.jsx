import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ItemFuncionalidade(item) {
    return (
        <Col sm="12" md="4" key={item.id} className="card-total">
            <Card className='m-3' text="white" >
                <Card.Body className='card-funcio'>
                    <Card.Title>
                        <p><strong>{item.curso}</strong></p>
                    </Card.Title>
                    <br></br>
                    <Card.Text>
                        <p><strong>Duração:</strong> {item.duracao}</p>
                    </Card.Text>
                    <Card.Text>
                        <p><strong>Modalidade:</strong> {item.modalidade}</p>
                    </Card.Text>
                    <Card.Text>
                        <p><strong>Nível:</strong> {item.nivel}</p>
                    </Card.Text>
                    <Card.Text>
                        <p><strong>Início:</strong> {item.inicio}</p>
                    </Card.Text>
                    <Card.Link target="_blank" className='link-cursos' href={item.plataforma}><p>{item.plataforma}</p></Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

function ListaFuncionalidades(props) {
    return (
        <Row>
            {props.funcionalidades.map(item => ItemFuncionalidade(item))}
        </Row>
    );
}

export default ListaFuncionalidades