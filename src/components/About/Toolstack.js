import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiTableau
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>

      {/* Version Control Platform */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>

      {/* Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Verccel" />
      </Col>

      {/* Data Visualization Tool */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau title="Tableau" />
      </Col>
    </Row>
  );
}

export default Toolstack;
