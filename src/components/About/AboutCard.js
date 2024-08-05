import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Or Solomon</span> from <span className="purple">Israel.</span>
            <br />
            I am a recent graduate with a BA in Information Systems Management and have gained experience in web development and data analysis.
            <br />
            Currently, I am exploring opportunities in web development and product management.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling to new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing basketball
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always strive to learn and grow, both personally and professionally."
          </p>
          <footer className="blockquote-footer">Or Solomon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
