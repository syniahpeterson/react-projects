import MenuList from "./menu-list";
import "./styles.css";

const TreeView = ({ menus = [] }) => {
  return (
    <div id="wrapper">
      <h2>Tree View</h2>
      <div className="tree-view-container">
        <MenuList list={menus} />
      </div>
    </div>
  );
};

export default TreeView;
