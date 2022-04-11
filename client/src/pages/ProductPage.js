import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function ProductDetails(props) {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getProductDetails() {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        console.log(typeof data);
        setProduct(data);
      } catch {
        console.log(id);
        console.log("Cannot get product details");
      }
    }
    getProductDetails();
  }, []);

  return <>{product && product.name}</>;
}
