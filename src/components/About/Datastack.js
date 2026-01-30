import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGooglecloud,
  SiAmazonaws,
  SiAmazons3,
  SiAmazonec2,
  SiDbt,
  SiApacheairflow,
  SiPowerbi,
  SiLooker,
  SiGoogleanalytics
} from "react-icons/si";

function DataStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Cloud Platforms */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud title="Google Cloud Platform (GCP)" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws title="AWS" />
      </Col>

      {/* Cloud Infrastructure */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 title="Amazon S3" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonec2 title="Amazon EC2" />
      </Col>

      {/* Data Engineering */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDbt title="dbt" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow title="Apache Airflow" />
      </Col>

      {/* Business Intelligence */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi title="Power BI" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLooker title="Looker / Looker Studio" />
      </Col>

      {/* Automation / Analytics */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics title="Google Apps Script" />
      </Col>
    </Row>
  );
}

export default DataStack;
