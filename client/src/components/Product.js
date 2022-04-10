import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product({ props }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/products/${props._id}`}>
          <Card.Img variant="top" src={props.image} />
        </Link>
        <Card.Body>
          <a href={`/products/${props._id}`}>
            <Card.Title as="div">
              <strong>{props.name}</strong>
            </Card.Title>
          </a>
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
