import React , {useEffect, useState} from 'react'
import {Card} from "antd"
import axios  from '../../links/axios';
const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      axios.get("/products").then(res => setProduct(res.data.products));
    }, [])

  return (
    <div>
           {product.map(p => <Card key={p.pId}> {p.title}</Card> )}
    </div>
  )
}

export default Products