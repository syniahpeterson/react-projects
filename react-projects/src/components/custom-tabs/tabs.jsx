import { useState } from "react";
import "./styles.css";

// Custom Tabs Component
const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  // Handle tab selection
  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };

  return (
    <div className="tabs-wrapper">
      {/* Tab buttons */}
      <div className="tabs-heading">
        {tabsContent.map((tabItem, index) => (
          <div
            key={tabItem.label}
            className={`tab-item ${index === currentTabIndex ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
          >
            <span className="tab-label">{tabItem.label}</span>
          </div>
        ))}
      </div>

      {/* Active content */}
      <div className="tab-content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
