import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import GlitchText from "../custom/glitch-text";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-background/80 hover:text-accent-foreground hover:border-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-transparent  hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        inverted:
          "bg-primary-foreground text-primary hover:bg-primary hover:text-accent",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  const [hoverTrigger, setHoverTrigger] = React.useState(0);
  const [glitchFrom, setGlitchFrom] = React.useState(0);
  const [duration, setDuration] = React.useState(1500);

  const handleHover = () => {
    setHoverTrigger((prev) => prev + 1);
    if (typeof children === "string") {
      setGlitchFrom(Math.floor(children.length * 0.7));
      setDuration(Math.floor(1500 * 0.7));
    }
  };

  return (
    <Comp
      data-slot="button"
      onMouseEnter={handleHover}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {typeof children === "string" ? (
        <GlitchText
          text={children}
          className="inline-block"
          triggerKey={hoverTrigger}
          glitchFrom={glitchFrom}
          duration={duration}
        />
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
