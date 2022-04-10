import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import productsData from "../products";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await axios.get("/api/products");
        setProducts(data.data);
      } catch (error) {
        console.log("Could not retrieve products");
      }
    }
    getProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products &&
          products.map((product) => (
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
