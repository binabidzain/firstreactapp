import {useState} from "react";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Card from '../components/Card';



function Shop() {

  let [products, setProducts] = useState(null);
  let [err, setErr] = useState(false);



  useEffect(() => {

    fetch("http://localhost:4000/products")
    .then(res => res.json())
    .then(products => setProducts(products))
    .catch(err => {
      setErr(true);
      console.log(err.message)
    })
    }, []);

  if(err)
  return <h1> Error in Loading data...</h1>

  if(!products){
    return <h1> Loading Products.....</h1>
  }
  console.log(products);
  
  return (
    <div>
      <Header />
      <h1>Shop</h1>
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="cars">Choose a car:</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="col-md-8">
          <div className="row " >
            
            {
                products.map(car => <Card cardata={car} />)              
            }
        
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;