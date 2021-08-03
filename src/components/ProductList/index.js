import React from "react";

import Product from "../Product";
import NoResults from "../NoResults";

import "./index.scss";

const ProductList = ({
  products,
  request,
  showProductDetails,
}) => {
  const product = products.map((product) => {
    return (
      <Product
        {...product}
        key={product.id}
        showProductDetails={() => showProductDetails(product.id)}
      />
    );
  });

  const productList = <ul className="product-list__list">{product}</ul>;

  return (
    <section className="product-list">
      <div className="product-list__container container">
        {products.length ? productList : <NoResults request={request} />}
      </div>
    </section>
  );
};

export default ProductList;
