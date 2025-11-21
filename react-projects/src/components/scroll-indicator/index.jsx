import { useEffect, useState, useRef } from "react";
import "./styles.css";

// Scroll Indicator - Shows scroll progress within a contained scrollable area
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const scrollContainerRef = useRef(null);

  // Dummy data fallback for when API fails to load
  const dummyData = [
    {
      id: 1,
      title: "Wireless Headphones",
      description:
        "High-quality wireless headphones with noise cancellation and long battery life.",
      price: 199.99,
      category: "electronics",
    },
    {
      id: 2,
      title: "Smart Watch",
      description:
        "Feature-rich smartwatch with health monitoring, GPS, and water resistance.",
      price: 299.99,
      category: "wearables",
    },
    {
      id: 3,
      title: "Laptop Stand",
      description:
        "Ergonomic aluminum laptop stand with adjustable height and cooling vents.",
      price: 79.99,
      category: "accessories",
    },
    {
      id: 4,
      title: "Coffee Maker",
      description:
        "Programmable coffee maker with built-in grinder and thermal carafe.",
      price: 149.99,
      category: "appliances",
    },
    {
      id: 5,
      title: "Gaming Mouse",
      description:
        "High-precision gaming mouse with customizable buttons and RGB lighting.",
      price: 89.99,
      category: "gaming",
    },
    {
      id: 6,
      title: "Desk Organizer",
      description:
        "Bamboo desk organizer with multiple compartments for office supplies.",
      price: 39.99,
      category: "office",
    },
    {
      id: 7,
      title: "Bluetooth Speaker",
      description:
        "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
      price: 129.99,
      category: "audio",
    },
    {
      id: 8,
      title: "Phone Case",
      description:
        "Durable phone case with shock absorption and wireless charging compatibility.",
      price: 24.99,
      category: "accessories",
    },
  ];

  // Fetch data from API with fallback to dummy data
  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);

      // Check if response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON");
      }

      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      } else {
        // No products found in API response
        setData([]);
      }
      setLoading(false);
    } catch (err) {
      console.log("API fetch failed:", err.message);
      setErrMsg(err.message); // Show error message
      setData(dummyData); // Fallback to dummy data when API fails
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  // Calculate scroll percentage for the container
  const handleScrollPercentage = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const percentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollPercentage(percentage);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScrollPercentage);
      return () => {
        container.removeEventListener("scroll", handleScrollPercentage);
      };
    }
  }, [data]);

  if (loading) {
    return (
      <div className="scroll-wrapper">
        <h2>Custom Scroll Indicator</h2>
        <div className="loading-message">Loading data...</div>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="scroll-wrapper">
        <h2>Custom Scroll Indicator</h2>
        <div className="error-message">Error: {errorMsg}</div>
      </div>
    );
  }

  return (
    <div className="scroll-wrapper">
      <h2>Custom Scroll Indicator</h2>

      {/* Scroll progress bar */}
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
        <span className="scroll-percentage">
          {Math.round(scrollPercentage)}%
        </span>
      </div>

      {/* Scrollable data container */}
      <div className="data-container" ref={scrollContainerRef}>
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div key={dataItem.id || index} className="data-item">
              <h3>{dataItem.title}</h3>
              <p>{dataItem.description}</p>
              <div className="item-details">
                <span className="price">${dataItem.price}</span>
                <span className="category">{dataItem.category}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data">No data available</div>
        )}
      </div>
    </div>
  );
};

export default ScrollIndicator;
