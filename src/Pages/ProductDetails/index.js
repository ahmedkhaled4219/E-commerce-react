import { useParams } from "react-router-dom";
import { axiosInstance } from "../../apis/config";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => {
        setProductDetails(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center mt-4">
          {productDetails.images && (
            <Col xs={6} md={4} lg={3} className="mb-4">
              <img
                src={productDetails.images[0]}
                alt={` 0`}
                className="product-img img-fluid"
              />
            </Col>
          )}
        </Row>
        <Row className="justify-content-center mt-4">
          {productDetails.images &&
            productDetails.images.slice(1).map((image, index) => (
              <Col key={index} xs={6} md={4} lg={3} className="mb-4">
                <img
                  src={image}
                  alt={` ${index}`}
                  className="product-img img-fluid"
                />
              </Col>
            ))}
        </Row>
      </Container>
      <div className="text-center mt-5">
        <h3>Product Name: {productDetails.title}</h3>
        <h3>Product Category: {productDetails.category}</h3>
        <p>{productDetails.description}</p>
      </div>
    </>
  );
}
