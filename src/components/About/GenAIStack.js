import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAmazonaws } from "react-icons/si";
import { TbLink, TbGraph } from "react-icons/tb";

function GenAIStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* GenAI Platforms */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws title="Amazon Bedrock" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbLink title="LangChain" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbGraph title="LangGraph" />
      </Col>
    </Row>
  );
}

export default GenAIStack;
