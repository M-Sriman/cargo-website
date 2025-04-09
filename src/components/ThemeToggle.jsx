import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full bg-white/70 dark:bg-black/40 hover:scale-110 transition duration-200 shadow-md"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun size={22} className="text-yellow-300" />
      ) : (
        <Moon size={22} className="text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
