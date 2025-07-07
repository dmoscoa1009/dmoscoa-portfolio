import NotFoundBackground from "@/components/custom/not-found-background";
import GlitchText from "@/components/custom/glitch-text";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative h-svh w-full overflow-hidden">
      <NotFoundBackground />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-8">
        <GlitchText text="404" className="text-6xl font-bold mb-4" />
        <GlitchText
          text="Page Not Found"
          className="text-lg mb-8 text-muted-foreground"
        />
        <Link to="/">
          <Button variant="ghost">← Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
