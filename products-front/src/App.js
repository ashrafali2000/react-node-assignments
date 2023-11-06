import {useEffect, useState} from "react"
import productUrl from "./axios"
import {Card} from "antd"
import AddProduct from "./newProducts";
function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    productUrl.get("/products").then(res => setProduct(res.data.products));
  }, [])
  
  const addProductHandler = () => {

  }
  return (
    <div className="App">
      {/* {product.map(p => <Card key={p.pId}> {p.title}</Card> )} */}
      <AddProduct addProductHandler = {addProductHandler}></AddProduct>
    </div>
  );
}

export default App;
