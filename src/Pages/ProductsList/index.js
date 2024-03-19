import { useEffect, useState } from "react";
import { getProducts } from "../../apis/products";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import Loader from "../../components/loader";

export default function ProductsList() {
  const [productsList, setProdcuts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProdcuts(res.data.products);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(productsList);
  return (
    <div className="container">
      <h2 className="text-center">Products list</h2>
      <hr />
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
