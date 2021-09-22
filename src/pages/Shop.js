import React from "react";
import Header from "../components/Header";
import { cardata } from "../data/productsdata";
import Card from '../components/Card';



function Shop() {

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
                cardata.map(car => <Card cardata={car} />)              
            }
        
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;