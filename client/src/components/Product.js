import React from "react";
import { Container, Card } from "react-bootstrap";

export default function Product({ props }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        {/* <a href={`/product/${props.product._id}`}></a> */}
        <Card.Img variant="top" src={props.image} />
        {/* <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body> */}
      </Card>
    </>
  );
}
