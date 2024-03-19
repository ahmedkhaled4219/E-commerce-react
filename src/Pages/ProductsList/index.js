import { useEffect, useState } from "react";
import { getProducts } from "../../apis/products";
import ProductCard from "../../components/Products/ProductCard/ProductCard";

export default function ProductsList() {
  const [productsList, setProdcuts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProdcuts(res.data.products))
      .catch((error) => console.log(error));
  }, []);
  console.log(productsList);
  return (
    <div className="container">
      <h2 className="text-center">Products list</h2>
      <hr />
      <div className="row justify-content-center">
        {productsList.map((product, index) => {
          return (
            <div className="col-md-3 mb-5" key={`product-${index}`}>
              <ProductCard productItem={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
