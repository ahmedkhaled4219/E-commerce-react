import { useState } from "react";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import Loader from "../../components/loader";

export default function ProductsList() {
  const [productsList, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = () => {
    setLoading(true);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/products", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
        setProducts(responseData.products);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    xhr.send();
  };

  return (
    <div className="container">
      <h2 className="text-center">Products list</h2>
      <hr />
      <button onClick={loadProducts}>Load Products</button>{" "}
      {loading ? (
        <Loader />
      ) : (
        <div className="row justify-content-center">
          {productsList.map((product, index) => (
            <div className="col-md-3 mb-5" key={`product-${index}`}>
              <ProductCard productItem={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
