import { FaSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="block py-2 pl-3 pr-4 rounded md:p-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <FaSun /> : <FaRegMoon />}
    </button>
  );
}

export default ThemeToggle;
