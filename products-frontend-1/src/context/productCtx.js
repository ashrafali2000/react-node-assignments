import React, { createContext } from 'react'

const ProductContext = createContext({
    products:[],
    chosenProduct:() => {}
})


export default ProductContext