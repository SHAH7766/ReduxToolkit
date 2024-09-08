import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from '../Components/Spinner' 
const Products = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false); // Added error state
  const [loading, setLoading] = useState(true); // Added error state

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      console.log(res.data.title)
      setData(res.data)
      setLoading(false)
    //   setData(res.data); // Update state with fetched data
    } catch (error) {
      setError(true); // Set error state
      console.log(error);
    }
  };
  if(loading){
    return (
        <div className="container">
            <Spinner/>
        </div>
    )
  }

  if (error) {
    return (
      <div>
        <h2>Error in Api calling</h2>
      </div>
    ); // Display error message
  }

  return (
    <>
      {!data ? (
        <h1>No data found</h1>
      ) : (
        <div style={{ marginTop: "100px" }} className="container">
          <div className="row">
            {data.map((product) => {
              return (
                <div
                  style={{ marginTop: "60px" }}
                  className="col-lg-3 col-sm-12 col-md-4"
                  key={product.id}
                >
                  <div
                    className="card"
                    style={{ width: "18rem",height:'500px' }}
                  >
                    <center>
                      {" "}
                      <img
                        src={product.image}
                        className="card-img-top w-50"
                        alt={product.title}
                      />
                    </center>
                    <div className="card-body">
                      <h5 className="card-title">{product.title.slice(0,100)}</h5>
                     
                      <h4>Stock {product.rating.count}</h4>
                      
                     <h5> RATING {product.rating.rate}</h5>
                      <p className="text-primary fs-5"> $ {product.price}</p>
                      <Link
                        to={`/detail/${product.id}`}
                        className="btn btn-primary w-100"
                      >
                        Buy now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
