import { Button } from "@/components/ui/button";
import ContactDrawer from "./contact-drawer";
import { Box, Pyramid, Cone } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function Header() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.theme || "light";
  });

  const cycleTheme = () => {
    const html = document.documentElement;
    const themes = ["light", "dark", "light-alt"];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    // Remove all theme classes
    html.classList.remove("dark", "light-alt", "dark-alt");

    // Add the next theme class (except for light which is default)
    if (nextTheme !== "light") {
      html.classList.add(nextTheme);
    }

    localStorage.theme = nextTheme;
    setCurrentTheme(nextTheme);
  };

  // Listen for theme changes from other parts of the app
  useEffect(() => {
    const handleStorageChange = () => {
      const newTheme = localStorage.theme || "light";
      setCurrentTheme(newTheme);
    };

    window.addEventListener("storage", handleStorageChange);

    // Also check for theme changes on focus (in case localStorage was updated in another tab)
    const handleFocus = () => {
      const newTheme = localStorage.theme || "light";
      setCurrentTheme(newTheme);
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-8  text-foreground">
      {/* Logo/Brand */}
      <Link to="/">
        <div className="text-sm ">DM/1009</div>
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-0 md:gap-6">
        <Link to="/projects">
          <Button variant="ghost" className=" text-xs ">
            PROJECTS [↗]
          </Button>
        </Link>

        <ContactDrawer>
          <Button variant="ghost" className=" text-xs ">
            CONTACT [↗]
          </Button>
        </ContactDrawer>

        <Button
          variant="ghost"
          size="icon"
          onClick={cycleTheme}
          className="w-8 h-8 relative"
          title={`Current theme: ${currentTheme}. Click to cycle themes.`}
        >
          {/* Light theme icon - Box */}
          <Box
            className={`h-4 w-4 absolute transition-all duration-300 ${
              currentTheme === "light"
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-90 scale-0 opacity-0"
            }`}
          />

          {/* Dark theme icon - Pyramid */}
          <Pyramid
            className={`h-4 w-4 absolute transition-all duration-300 ${
              currentTheme === "dark"
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-90 scale-0 opacity-0"
            }`}
          />

          {/* Light-alt theme icon - Cone */}
          <Cone
            className={`h-4 w-4 absolute transition-all duration-300 ${
              currentTheme === "light-alt"
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-90 scale-0 opacity-0"
            }`}
          />
        </Button>
      </div>
    </div>
  );
}
