import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  User,
  Star,
  Mail,
  FolderDot,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useNavigate } from "react-router";

const links = [
  {
    name: "About Me",
    href: "/about",
    icon: User,
    shortcut: "⌘A",
  },
  {
    name: "Experience",
    href: "/experience",
    icon: Star,
    shortcut: "⌘E",
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderDot,
    shortcut: "⌘G",
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Mail,
    shortcut: "⌘C",
  },
];

export default function LinksCommand() {
  const navigate = useNavigate();

  return (
    <Command className="w-full bg-transparent">
      <CommandList>
        <CommandGroup>
          {links.map((link) => (
            <CommandItem
              key={link.name}
              className="hover:bg-foreground/10"
              onSelect={() => navigate(link.href)}
            >
              <link.icon className="w-4 h-4 mr-2" />
              <span>{link.name}</span>
              <span className="ml-auto text-foreground-secondary text-sm">
                {link.shortcut}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator className="bg-border" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 p-4">
            <span className="text-foreground-secondary text-sm">
              Follow for more:
            </span>
            <div className="flex gap-2">
              <a
                href="https://github.com/dmoscoa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/dmoscoa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/dmoscoa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </CommandList>
    </Command>
  );
}
