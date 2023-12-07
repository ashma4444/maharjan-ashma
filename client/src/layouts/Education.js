import "./Education.css";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import React from "react";

function Education() {
  const accordinContent = [
    {
      title: "BSc (Hons) Computing",
      college: "Islington College",
      board: "London Metropolitan University",
      location: "Kamalpokhari, Kathmandu",
    },
    {
      title: "High School Secondary Education",
      college: "National College of Computer Studies (NCCS)",
      board: "National Examination Board (NEB)",
      location: "Paknajol, Kathmandu",
    },
    {
      title: "Secondary Education Examination (SEE)",
      college: "Kathmandu Model School (KMS)",
      board: "National Examination Board (NEB)",
      location: "Khusibu, Kathmandu",
    },
  ];
  return (
    <>
      <div className="education">
        <h3 className="secondary-heading">Education</h3>
        <h1 className="primary-heading">Education</h1>

        <div>
          <Accordion>
            {accordinContent.map((item, index) => (
              <AccordionItem title={item.title} key={index}>
                <div className="p-4">
                  <p className="acc-text">{item.college}</p>
                  <p className="acc-text">{item.board}</p>
                  <p className="acc-text">{item.location}</p>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Education;
