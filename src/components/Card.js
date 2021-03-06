import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  let baseUrl="http://localhost:4000/"
  return (
      <div key={props.cardata.id}  className="card m-2" style={{ width: "18rem"  }}>
        <img
          className="card-img-top"
          src={baseUrl+ props.cardata.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.cardata?.title}</h5>
          <p className="card-text">Price: Rs {props.cardata.price} </p>
          <p>Ratings : {props.cardata.ratings}</p>
          <p>{props.cardata.description}
            
          </p>
          <Link to={"/product/" + props.cardata._id} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
              


  );
}



export default Card;
