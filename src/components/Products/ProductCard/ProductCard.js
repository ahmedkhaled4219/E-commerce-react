import Button from "react-bootstrap/Button";
import "./style.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ productItem }) {
  const navigate = useNavigate();

  const redirectToDetails = (id) => {
    navigate(`products/${id}`);
  };

  return (
    <div className="card mb-2" style={{ width: "18rem" }}>
      <img src={productItem.images[0]} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{productItem.title}</h5>
        </div>

        <p className="card-text des">{productItem.description}</p>

        <div className="d-flex justify-content-between align-items-center">
          <Button variant="primary" className="me-2">
            Add to cart
          </Button>
          <Button
            variant="primary"
            onClick={() => redirectToDetails(productItem.id)}
          >
            Product Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
