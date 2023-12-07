import Col from "react-bootstrap/Col";
import { Progress } from "react-sweet-progress";
import React from "react";
import "react-sweet-progress/lib/style.css";
import Row from "react-bootstrap/Row";
import "./Skills.css";
import { useMediaQuery } from "react-responsive";

function Skills() {
  const isMediumScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <div className="skills">
        <h3 className="secondary-heading">My Speciality</h3>
        <h1 className="primary-heading">Skills</h1>

        <div>
          <Row>
            <Col xs={isMediumScreen ? 12 : 6} className="mb-4">
              <p>HTML5</p>
              <Progress
                percent={90}
                status="custom"
                theme={{
                  custom: {
                    symbol: "90%",
                    color: "#fbc630",
                  },
                }}
              />
            </Col>
            <Col xs={isMediumScreen ? 12 : 6} className="mb-4">
              <p>CSS3</p>
              <Progress
                percent={85}
                status="custom"
                theme={{
                  custom: {
                    symbol: "85%",
                    color: "#2c98f0",
                  },
                }}
              />
            </Col>
            <Col xs={isMediumScreen ? 12 : 6} className="mb-4">
              <p>React</p>
              <Progress
                percent={70}
                status="custom"
                theme={{
                  custom: {
                    symbol: "70%",
                    color: "#ec5453",
                  },
                }}
              />
            </Col>
            <Col xs={isMediumScreen ? 12 : 6} className="mb-4">
              <p>Vue JS</p>
              <Progress
                percent={80}
                status="custom"
                theme={{
                  custom: {
                    symbol: "80%",
                    color: "#a84cb8",
                  },
                }}
              />
            </Col>
            <Col xs={isMediumScreen ? 12 : 6}>
              <p>Django</p>
              <Progress
                percent={65}
                status="custom"
                theme={{
                  custom: {
                    symbol: "65%",
                    color: "#2fa499",
                  },
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Skills;
