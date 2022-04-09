import React from "react";
import { Card } from "react-bootstrap";

export default function Product({ props }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        {/* <a href={`/products/${props._id}`}> */}
        <Card.Img variant="top" src={props.image} />
        {/* </a> */}
        <Card.Body>
          {/* <a href={`/product/${props._id}`}> */}
          <Card.Title as="div">
            <strong>{props.name}</strong>
          </Card.Title>
          {/* </a> */}
          <Card.Text as="div">
            <div className="my-3">
              {props.rating} from {props.numReviews}
            </div>
          </Card.Text>
          <Card.Text as="h3">£{props.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
