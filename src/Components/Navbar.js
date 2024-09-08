import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { getCartTotal } from "../Redux/CartSlicer";

const Navbar = () => {
    const dispatch = useDispatch()
    const {Cart,totalQuantity,totalPrice} = useSelector(state=>state.name)
    useEffect(()=>{
        dispatch(getCartTotal())
    },[Cart])
  return (
    <>
      <nav style={{backgroundColor:'#2C3A47'}} className="navbar navbar-expand-lg fixed-top ">
        <div className="container">
          <h3 className="navbar-brand text-light" >
            Klasen
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              
            </ul>
            <form className="d-flex" role="search">
              <Link to="/cart">
                
                  <i class="fa-solid fa-cart-plus text-light">
                    <span  className="text-light mx-2 fs-6">{totalQuantity}</span>
                  </i>
                
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
