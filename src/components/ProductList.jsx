import { Row, Card, Button } from "react-bootstrap";
import { isOutOfStock } from "../services/productService";


const ProductList = ({
  products,
  onAddToCart,
  onEditProduct,
  onDeleteProduct,
}) => {
  const handleDelete = (product) => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      onDeleteProduct(product.id);
    }
  };

  return (
    <>
      <Row>
        {products.map((product) => (
          <div key={product.id} className="product-col mb-4">
            <Card className="h-100 lean-card">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted mb-2">
                  ₱{product.price?.toFixed(2)}
                </Card.Text>
                <Card.Text className="text-muted mb-2">
                  {product.stocksLeft > 0 ? product.stocksLeft : "Out of Stock"}
                </Card.Text>
                <Card.Text className="flex-grcow-1">
                  {product.description}
                </Card.Text>
                <div className="mt-auto">
                  <div className="d-flex gap-2">
                    <Button
                      variant={isOutOfStock(product) ? "secondary" : "primary"}
                      size="sm"
                      onClick={() => onAddToCart(product)}
                      className="flex-grow-1"
                      disabled={isOutOfStock(product)}
                    >
                      {isOutOfStock(product) ? "Out of Stock" : "Add Cart"}
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(product)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => onEditProduct(product)}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </>
  );
};

export default ProductList;
