import "./Contact.css";
import { Button } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Contact() {
  const [copyState1, setcopyState1] = useState(false);
  const [copyState2, setcopyState2] = useState(false);
  const [copyState3, setcopyState3] = useState(false);

  // // Reset the copy state after a certain period (e.g., 1500 milliseconds)
  // setTimeout(() => {
  //   setcopyState1(false);
  //   setcopyState2(false);
  //   setcopyState3(false);
  // }, 5000);

  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {copyState1 ? "Copied" : "Copy"}
    </Tooltip>
  );

  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {copyState2 ? "Copied" : "Copy"}
    </Tooltip>
  );

  const renderTooltip3 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {copyState3 ? "Copied" : "Copy"}
    </Tooltip>
  );

  const handleCopyState = (id) => {
    id === 1
      ? setcopyState1(true)
      : id === 2
      ? setcopyState2(true)
      : setcopyState3(true);
  };

  const contactInfo = [
    {
      id: 1,
      text: "+977 9828731962",
      icon: faPhone,
      value: "+977 9828731962",
      action: renderTooltip1(),
    },
    {
      id: 2,
      text: "ashma20570218@gmail.com",
      icon: faEnvelope,
      value: "ashma20570218@gmail.com",
      action: renderTooltip2(),
    },
    {
      id: 3,
      text: "Kathmandu, Nepal",
      icon: faLocationDot,
      value: "Kathmandu, Nepal",
      action: renderTooltip3(),
    },
  ];

  return (
    <>
      <div className="contact">
        <h3 className="secondary-heading">Get in Touch</h3>
        <h1 className="primary-heading">Contact</h1>

        <div className="d-flex flex-wrap">
          <div className="info-main">
            {contactInfo.map((item, index) => (
              <CopyToClipboard
                text={item.text}
                onCopy={() => handleCopyState(item.id)}
                key={index}
              >
                <div className="copy-area d-flex align-items-center mb-3">
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 50, hide: 200 }}
                    overlay={item.action}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="icon-common"
                      style={{ cursor: "pointer" }}
                    />
                  </OverlayTrigger>
                  <p className="m-0 p-0">{item.value}</p>
                </div>
              </CopyToClipboard>
            ))}
          </div>
          <form className="contact-form-main">
            <input
              placeholder="Name"
              className="contact-form-input mb-4"
            ></input>
            <input
              placeholder="Email"
              className="contact-form-input mb-4"
            ></input>
            <input
              placeholder="Subject"
              className="contact-form-input mb-4"
            ></input>
            <textarea
              className="contact-form-textarea mb-4"
              placeholder="Message"
            ></textarea>
            <Button style={{ backgroundColor: "#2c98f0" }}>Send Message</Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
