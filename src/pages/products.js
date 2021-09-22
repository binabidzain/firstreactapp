import Header from "../components/Header";
import React from "react";
import { useParams } from "react-router-dom";
import "../styles/productdetails.css";
import { getProductById } from "../data/productsdata";

function Product() {
  let params = useParams();
  let product = getProductById(params.id);

  return (
    <div>
      <Header />

      <div className="main__container d-flex">
        <div className="image__container">
          <img src={`../${product.image}`} alt="car-img" ></img>
        </div>

        <div className="description__container">
          <h1>{product.title}</h1>
          <div>
          <div>
            <h3>Price:</h3>
            {product.price}
          </div>
            <h3>Model:</h3>
            {product.model}
          </div>
          <div>
            <h3>Ratings:</h3> &#9734; &#9733;
          </div>
          <div>
            <h3>Description :</h3> {product.description}
          </div>
          <div className="cart">
            <button type="button" className="btn btn-success">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
