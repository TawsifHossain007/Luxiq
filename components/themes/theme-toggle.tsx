"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/themes/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={toggleTheme}
      className="text-muted-foreground hover:text-gold hover:bg-gold-muted transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="h-4 w-4" />
      ) : (
        <FiSun className="h-4 w-4" />
      )}
    </Button>
  );
}