import Navigation from "../Nav/Nav";
import { Container, Row, Col } from "react-bootstrap";

import "./Header.css";

const Header = () => {
  return (
    <Container className='header-main-cont'fluid>
      Header Container
      <Container>
        <Row className="center-top-row">
          <Col>
          </Col>
          <Col className="center-top-col" xs={6}>
            BXXXXX PXXXX CORP
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </Container>
  )
}

export default Header
