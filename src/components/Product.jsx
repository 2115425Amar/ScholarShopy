import React, { useState } from 'react'

const Product = ({post}) => {
    const [selected] = useState(false);
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

    <button>
        {
            selected ? 
            <p>RemoveItem</p> :
            <p>Add to Cart</p>
        }
    </button>
      
    </div>
  )
}

export default Product
