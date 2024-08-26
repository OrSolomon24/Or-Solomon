import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import myKitchen from "../../Assets/Projects/myKitchen.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Dobo"
              description="Dobo is a user-friendly restaurant management application that enhances your dining experience by providing easy access to various features."
              ghLink="https://github.com/ohadmizrahi/Dobo"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LastCall"
              description="My Flight search website offers users a comprehensive solution for their travel needs, leveraging an advanced bot. Users can search for flights, read and write reviews, and gain insights into popular destinations. With a bot in place, my platform matches appropriate flights with each vacation, ensuring a seamless travel experience for all."
              ghLink="https://github.com/ohadmizrahi/LastCall"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myKitchen}
              isBlog={false}
              title="MyKitchen"
              description="a full-stack recipe management application where my girlfriend can easily add, edit, and categorize their favorite recipes. The application includes features like manual recipe entry, adding recipes via links, and organized category selection for efficient browsing. Implemented using React for the frontend and Node.js with MongoDB for the backend, focusing on a seamless and responsive user experience across devices."
              ghLink="https://github.com/OrSolomon24/MyKitchen"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
