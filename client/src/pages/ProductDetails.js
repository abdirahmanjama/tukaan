import React from "react";
import productsData from "../products";

export default function ProductDetails({ match }) {
  const prod = productsData.filter(
    (product) => product._id === match.params.id
  );

  return <>{prod.name}</>;
}
