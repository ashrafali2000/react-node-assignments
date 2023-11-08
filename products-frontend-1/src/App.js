import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

function App() {

  
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
         <Route index element={<Home></Home>}/>
         <Route path="/login" element={<SignIn></SignIn>}/>
         <Route path="/signup" element={<SignUp></SignUp>}/>
        </Route>
       </Routes>
    </div>
  );
}

export default App;
