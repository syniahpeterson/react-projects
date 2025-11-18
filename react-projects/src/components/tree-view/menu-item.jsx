import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

// MenuItem - Individual tree node with expand/collapse functionality
const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  // Toggle expanded/collapsed state for menu item
  const handleToggleChildren = (getCurrentlabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
    console.log(displayCurrentChildren);
  };

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>

        {/* Show expand/collapse icon if item has children */}
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#6461ad" size={15} />
            ) : (
              <FaPlus color="#6461ad" size={15} />
            )}
          </span>
        ) : null}
      </div>

      {/* Render children when expanded */}
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
