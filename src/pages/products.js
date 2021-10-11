import Header from "../components/Header";
import React, { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/productdetails.css";
import { getProductById } from "../data/productsdata";

function Product() {
  let params = useParams();
  let id=params.id;
  let [product, setProduct]=useState([]);
  let [err, setErr] = useState(false);
  let baseUrl="http://localhost:4000/"  
  
console.log(product)
  useEffect(() => {

    fetch(`http://localhost:4000/products/${id}`)
    
    .then(res => res.json())
    .then(data => setProduct(data))
    
    .catch(err => {
      setErr(true);
      console.log(err.message)
    })
    }, []);

  if(err)
  return <h1> Error in Loading data...</h1>

  if(!product){
    return <h1> Loading Products.....</h1>
  }
  console.log(product);

  return (
    <div>
      <Header />

      <div className="main__container d-flex">
        <div className="image__container">
          <img src={baseUrl+product[0].image} alt="car-img" ></img>
        </div>

        <div className="description__container">
          <h1>{product[0].title}</h1>
          <div>
          <div>
            <h3>Price: {product[0].price} </h3>
            
          </div>
            <h3>Model: {product[0].model}</h3>
            
          </div>
          <div>
            <h3>Ratings: {product[0].ratings}</h3> 
          </div>
          <div>
            <h3>Description : {product[0].description}</h3> 
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
