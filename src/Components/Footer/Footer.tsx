import { Container, Row, Col } from 'react-bootstrap'
import "./Footer.css"

const Footer = () => {
    return (
        <Container className='footer-cont-1' fluid>
            <Container className='footer-cont-2'>
                <Row className="center-top-row">
                    <Col>
                    </Col>
                    <Col className="center-top-col" xs={6}>
                        Footer
                        BXXXXX PXXXX CORP
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer
