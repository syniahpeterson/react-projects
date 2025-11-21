import Tabs from "./tabs";

// Sample content component
const TertiaryComponent = () => {
  return (
    <p>
      There are six tertiary colors: Red-Orange, Yellow-Orange, Yellow-Green,
      Blue-Green, Blue-Violet, and Red-Violet
    </p>
  );
};

const TabTest = () => {
  // Tab data with labels and content
  const tabs = [
    {
      label: "Primary Colors",
      content: "Red, Yellow, Blue",
    },
    {
      label: "Secondary Colors",
      content: "Orange, Green, Purple",
    },
    {
      label: "Tertiary Colors",
      content: <TertiaryComponent />,
    },
  ];

  // Tab change handler
  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
