import React from "react";
import { Accordion, Card } from "../styles/accordion";

const Doubts = () => {
  return (
    <div className="doubts">
      <Accordion>
        <h3 className="AccordionTitle">Dúvidas Frequentes</h3>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h6>Aqui irá o título da pergunta frequente</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla
              turpis, tincidunt sed sollicitudin eget, aliquam vel orci. Aliquam
              elementum, lorem eget sodales imperdiet, nulla augue tincidunt
              ligula, et gravida nunc massa id enim. In hac habitasse platea
              dictumst. Quisque id porta urna. Nunc tempus risus auctor turpis
              vestibulum congue.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h6>Aqui irá o título da pergunta frequente</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla
              turpis, tincidunt sed sollicitudin eget, aliquam vel orci. Aliquam
              elementum, lorem eget sodales imperdiet, nulla augue tincidunt
              ligula, et gravida nunc massa id enim. In hac habitasse platea
              dictumst. Quisque id porta urna. Nunc tempus risus auctor turpis
              vestibulum congue.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <h6>Aqui irá o título da pergunta frequente</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla
              turpis, tincidunt sed sollicitudin eget, aliquam vel orci. Aliquam
              elementum, lorem eget sodales imperdiet, nulla augue tincidunt
              ligula, et gravida nunc massa id enim. In hac habitasse platea
              dictumst. Quisque id porta urna. Nunc tempus risus auctor turpis
              vestibulum congue.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <h6>Aqui irá o título da pergunta frequente</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla
              turpis, tincidunt sed sollicitudin eget, aliquam vel orci. Aliquam
              elementum, lorem eget sodales imperdiet, nulla augue tincidunt
              ligula, et gravida nunc massa id enim. In hac habitasse platea
              dictumst. Quisque id porta urna. Nunc tempus risus auctor turpis
              vestibulum congue.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            <h6>Aqui irá o título da pergunta frequente</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla
              turpis, tincidunt sed sollicitudin eget, aliquam vel orci. Aliquam
              elementum, lorem eget sodales imperdiet, nulla augue tincidunt
              ligula, et gravida nunc massa id enim. In hac habitasse platea
              dictumst. Quisque id porta urna. Nunc tempus risus auctor turpis
              vestibulum congue.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            <h6>Aqui irá o título da pergunta frequente</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla
              turpis, tincidunt sed sollicitudin eget, aliquam vel orci. Aliquam
              elementum, lorem eget sodales imperdiet, nulla augue tincidunt
              ligula, et gravida nunc massa id enim. In hac habitasse platea
              dictumst. Quisque id porta urna. Nunc tempus risus auctor turpis
              vestibulum congue.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            <h6>Aqui irá o título da pergunta frequente</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla
              turpis, tincidunt sed sollicitudin eget, aliquam vel orci. Aliquam
              elementum, lorem eget sodales imperdiet, nulla augue tincidunt
              ligula, et gravida nunc massa id enim. In hac habitasse platea
              dictumst. Quisque id porta urna. Nunc tempus risus auctor turpis
              vestibulum congue.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Doubts;
