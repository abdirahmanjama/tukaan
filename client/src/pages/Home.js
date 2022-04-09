import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import productsData from "../products";

export default function Home() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {productsData.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product
              props={product}
              //   id={product._id}
              //   name={product.name}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
