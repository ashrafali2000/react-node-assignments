import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ProductContext from "./context/productCtx";
import { useState } from "react";
import SingleProduct from "./pages/singleProduct";
import Admin from "./pages/admin";

function App() {

  const [product, setProduct] = useState([]);
const chosenProduct = (data) => [
 setProduct(data)
]

  return (
    <div className="App">
       <Routes>
         
        <Route path="/" element={
          <ProductContext.Provider value={{
            product : product, chosenProduct
          }}>
            <Navbar></Navbar>
          </ProductContext.Provider>
        }>
         <Route index element={<Home></Home>}/>
         <Route path="/login" element={<SignIn></SignIn>}/>
         <Route path="/signup" element={<SignUp></SignUp>}/>
         <Route path="/admin" element={<Admin></Admin>}/>
         <Route path="/electronics" element={<SingleProduct product = {product}></SingleProduct>}/>
        </Route>
       </Routes>
    </div>
  );
}

export default App;
