import { Button } from "@/components/ui/button";
import ContactDrawer from "./contact-drawer";
import { Box, Pyramid } from "lucide-react";
import { Link } from "react-router";

export default function Header() {
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");

    if (isDark) {
      html.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      html.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

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
          onClick={toggleTheme}
          className="w-8 h-8  relative"
        >
          <Box className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Pyramid className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </div>
  );
}
