import { BrowserRouter as Router, Routes, Route} from "react-router";
import "./App.css";
import Sidebar from "./sidebar/sidebar";
import Overview from "./pages/overview.jsx";
import Product from "./pages/product.jsx";
import Users from "./pages/users.jsx";
import Sales from "./pages/sales.jsx";
import Orders from "./pages/orders.jsx";
import Analytics from "./pages/analytics.jsx";
import Settings from "./pages/settings.jsx";

import { useState } from "react";
import { theme , themeSwitch } from "./common/useContext.jsx";

function App() {
  const [change , setChange] = useState(themeSwitch.trueState)
  const changeFunc = ()=>{
    setChange(!change)
  }
  return (
    <theme.Provider value={{change , changeFunc}}>
      <div  className="flex">
      <Router>
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Overview/>} ></Route> 
        <Route path="/products" element={<Product/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/sales" element={<Sales/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/analytics" element={<Analytics/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
      </Routes>
    </Router>
      </div>
    </theme.Provider>
  );
}

export default App;
