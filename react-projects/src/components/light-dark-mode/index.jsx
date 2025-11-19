import useLocalStorage from "./useLocalStorage";
import "./styles.css";

// Light Dark Mode - Localized theme switcher (only affects this component)
const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  // Toggle between light and dark themes
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // Theme is applied only to this container via data-theme attribute

    <div className="wrapper">
        <h2>Light Mode - Dark Mode</h2>
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>Hello World!</p>
          <button className="theme-btn" onClick={handleToggleTheme}>
            Change Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default LightDarkMode;
