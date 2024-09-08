import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Redux/CartSlicer";
import Spinner from "../Components/Spinner";
const DetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false); // Added error state
  const[loading,setLoading]=useState(true)
  useEffect(() => {
    getSingleProduct();
  });
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      setData(res.data); // Update state with fetched data
      setLoading(false)
    } catch (error) {
      setError(true); // Set error state
      console.log(error);
    }
  };
  if (error) {
    return (
      <div>
        <h2>Error in Api calling</h2>
      </div>
    ); // Display error message
  }
  if(loading){
    return (
        <div className="container">
            <Spinner/>
        </div>
    )
  }
  return (
    <>
      <div style={{ marginTop: "100px" }} className="container ">
        <div className="row">
          <div className="col-lg-6">
            <img src={data.image} width={200} />
          </div>
          <div className="col-lg-6">
            <p className="display-5 text-danger">{data.category}</p>
            <h2 className="text-warning">{data.title}</h2>
            <p>{data.description}</p>
            <h3>$ {data.price}</h3>
            <>
              <button className="mx-2 btn btn-dark">Buy now</button>
              <Link to="/cart">
                <button
                  onClick={() => dispatch(AddToCart(data))}
                  className="btn btn-outline-dark w-50"
                >
                  Add to Cart
                </button>
              </Link>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
