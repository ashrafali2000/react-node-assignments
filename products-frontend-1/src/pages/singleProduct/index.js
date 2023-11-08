import React from 'react'
import Card from 'antd/es/card/Card'
const SingleProduct = ({product}) => {
  return (
    <div><h1 className =" font-bold text-[30px]">SingleProduct</h1>
    <div className='flex justify-center items-center flex-wrap'>
        {product.map(p => <Card>
            <img className='md:w-60 md:h-60 w-36 h-36' src={p.images[0]}></img>
            <h1>{p.title}</h1> 
        </Card>)}
    </div>
    </div>
  )
}

export default SingleProduct