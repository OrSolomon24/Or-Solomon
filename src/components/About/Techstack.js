import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from "react-icons/di";
import { SiPostgresql, SiFastapi } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi title="FastAPI" />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL / SQL" />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
    </Row>
  );
}

export default Techstack;
