import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-copywright">
          <h3>© {year} Or Solomon</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
