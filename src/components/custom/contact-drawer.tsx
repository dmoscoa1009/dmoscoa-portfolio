import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import ContactForm from "./contact-form";

interface ContactDrawerProps {
  children?: React.ReactNode;
}

export default function ContactDrawer({ children }: ContactDrawerProps) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        {children || <Button variant="outline">Contact Me</Button>}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle>Let's Work Together</DrawerTitle>
            <DrawerDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <ContactForm />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
