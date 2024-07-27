import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Cartitem from '../components/Cartitem';

const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount, setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price , 0));
  },[cart]);

  return (
    <div className="mx-auto">
    {
      cart.length>0 ?
       (<div className="flex flex-row justify-between">
       {/* ------------------------------------------------------------------------ */}
        <div className="">
          {
            cart.map((item,index)=>{
              return <Cartitem key={item.id} item={item} itemIndex={item}/>
            })
          }
        </div>
        {/* ---------------------------------------------------------------------------- */}
        <div className='flex flex-col mx-auto'>
          <div className='outline mt-12'>
            <div>Your Cart</div>
            <div>Summary</div>
            <p><span>Total Items: {cart.length}</span></p>
          </div>

          <div className='outline mt-10'>
            <p>Total Amount :{totalAmount}</p>
            <button>CheckOut Now</button>
          </div>
        </div>
       </div>):

       (<div>
        <h1>Your Cart is Empty</h1>
        <Link to={"/"}>Add Items to Cart</Link>
       </div>)
    }
    </div>
  )
}

export default Cart
