import { useEffect, useState } from "react";
import "./styles.css";

// Load More Data - Progressive product loading with pagination
const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  // Fetch products with pagination (skip = count * 20)
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading && products.length === 0) {
    return (
      <div className="load-more-container">
        <div className="loading-message">Loading products! Please wait...</div>
      </div>
    );
  }
  return (
    <div className="load-more-container">
      {/* Main heading for the product gallery */}
      <h2 className="gallery-header">Product Gallery</h2>

      {/* Responsive grid container for products */}
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              /* Individual product card with unique key */
              <div className="product" key={`${item.id}-${index}`}>
                {/* Product thumbnail image */}
                <img src={item.thumbnail} alt={item.title} />

                {/* Product title */}
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>

      {/* Load more controls section */}
      <div className="button-container">
        {/* Load more button - disabled when limit reached */}
        <button
          disabled={disableButton}
          onClick={() => setCount(count + 1)} // Increment count to trigger next batch
        >
          Load More Products
        </button>

        {/* Limit reached message */}
        {disableButton ? <p>You have reached 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
