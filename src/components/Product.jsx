import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice';

const Product = ({post}) => {
    // const [selected] = useState(false);
    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();

    const addToCart = () =>{
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

    const removeFromCart=()=>{
        dispatch(remove(post.id));
        toast.success("Item Removed From Cart");
    }

  return (
    <div>
    <div>
        <p>{post.title}</p>

    </div>

    <div>{post.description}</div>

    <div>
        <img src={post.image} alt="" />
    </div>

    <div>
        {post.price}
    </div>

    {/* <button>
        {
            selected ? 
            <p>RemoveItem</p> :
            <p>Add to Cart</p>
        }
    </button> */}
    {/* console.log(cart); */}

    {
        cart.some((p)=>p.id===post.id) ?
        (<button onClick={removeFromCart}>
            Remove Item
        </button>):
        (<button onClick={addToCart}>Add To Cart
        </button>)
    }
      
    </div>
  )
}

export default Product
