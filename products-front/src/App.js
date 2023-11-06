import {useEffect, useState} from "react"
import productUrl from "./axios"
import {Card} from "antd"
function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    productUrl.get("/products").then(res => setProduct(res.data.products));
  }, [])
  
  return (
    <div className="App">
      {product.map(p => <Card key={p.pId}> {p.title}</Card> )}
    </div>
  );
}

export default App;
