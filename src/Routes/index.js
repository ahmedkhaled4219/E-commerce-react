import { Route, Routes } from "react-router-dom";
import ProductsList from "../Pages/ProductsList";
import ProductDetails from "../Pages/ProductDetails";
import SignUp from "../Pages/Signup";
import FormValues from "../Pages/FormValues";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/values" element={<FormValues />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
