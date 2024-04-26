import Login from "./components/Login";
import Footer from '../src/components/Footer'
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { Route, Routes } from "react-router-dom";
import NoPage from "./components/NoPage";
export default function App() {
  return (

    <>


      {/* <Routes>
        <Route exact path="/" component={Products} />
        <Route path="/product/:productId" component={ProductDetails} />
      </Routes> */}

      <Routes>
        <Route >
          <Route index element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails productId="2"/>} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

      {/* <Login/> */}

      {/* <Products />
      <Footer /> */}
      {/* <ProductDetails/> */}
    </>

  )
}