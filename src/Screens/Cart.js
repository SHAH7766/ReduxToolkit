import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IncrementQuantity, RemoveCart,getCartTotal,DecrementQuantity } from '../Redux/CartSlicer'
import { Link } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch() 
    const {Cart,totalQuantity,totalPrice} = useSelector(state=>state.name)
    useEffect(()=>{
        dispatch(getCartTotal())
    },[Cart])
  return (
    <>
<section style={{marginTop:"100px"}} className="h-100 h-custom" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">
            <div className="row">
              <div className="col-lg-7">
                <h5 className="mb-3"><Link to='/'  className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Continue shopping</Link></h5>
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have {totalQuantity} items in your cart</p>
                  </div>
                  
                </div>
                {
                    Cart.map((x)=>{
                        return(
                            <>
                                 <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img src={x.image} className="img-fluid rounded-3" alt="Shopping item" style={{width: 65}} />
                        </div>
                        <div className="ms-3">
                          <h5>{x.title} </h5>
                          <p className="small mb-0">256GB, Navy Blue</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                            <button onClick={()=>dispatch(IncrementQuantity(x))} className='mx-2 btn btn-success'>+</button>
                          <h5 className="fw-normal mb-0">{x.quantity}</h5>
                            <button onClick={()=>dispatch(DecrementQuantity(x))} className='mx-2 btn btn-danger'>-</button>
                        <div style={{width: 50}}>
                        </div>
                        <div style={{width: 80}}>
                          <h5 className="mb-0">${x.price}</h5>
                        </div>
                        <button onClick={()=>dispatch(RemoveCart(x))} ><i className="fas fa-trash-alt text-danger" /></button>
                      </div>
                    </div>
                  </div>
                </div>
                            
                            </>
                        )
                    })
                }
           
                
              </div>
              <div className="col-lg-5">
                <div className="card bg-primary text-white rounded-3">
                  <div className="card-body">
            
                  
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total items </p>
                      <p className="mb-2 text-light">{totalQuantity}</p>
                    </div>
                  
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-2">Total Price</p>
                      <p className="mb-2">$ {totalPrice}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Cart
