import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import GlitchText from "@/components/custom/glitch-text";

/* ─────────────────── Zod schema ─────────────────── */
const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z
    .string()
    .min(3, { message: "Email is required." })
    .refine((val) => val.includes("@"), { message: "Email must include '@'." })
    .refine((val) => /@.+\./.test(val), {
      message: "Email must include a domain (e.g. .com).",
    }),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<"success" | "error" | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (sent !== null) {
      const timeout = setTimeout(() => {
        setSent(null);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [sent]);

  /* ───────────────  handle submit  ─────────────── */
  async function onSubmit(data: ContactFormValues) {
    setSending(true);
    setSent(null);
    setErrorMsg("");
    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE!,
        import.meta.env.VITE_EMAILJS_TEMPLATE!,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC!
      );

      if (res.status === 200) {
        form.reset();
        setSent("success");
      } else {
        setSent("error");
        setErrorMsg("Something went wrong. Try again?");
      }
    } catch {
      setSent("error");
      setErrorMsg("Network error – please try again.");
    } finally {
      setSending(false);
    }
  }

  // Helper for error border
  const errorClass = (name: keyof ContactFormValues) =>
    form.formState.errors[name]
      ? "border-destructive ring-2 ring-destructive/60"
      : "border-input";

  /* ───────────────  form markup  ─────────────── */
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  {...field}
                  className={` ${errorClass("name")}`}
                />
              </FormControl>
              {form.formState.errors.name && (
                <div className="text-xs font-mono text-destructive mt-1 flex items-center gap-1">
                  <XCircle className="w-4 h-4" />
                  <GlitchText text={form.formState.errors.name.message || ""} />
                </div>
              )}
            </FormItem>
          )}
        />
        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="you@email.com"
                  type="text"
                  {...field}
                  className={`${errorClass("email")}`}
                />
              </FormControl>
              <FormDescription>We’ll never share your email.</FormDescription>
              {form.formState.errors.email && (
                <div className="text-xs font-mono text-destructive mt-1 flex items-center gap-1">
                  <XCircle className="w-4 h-4" />
                  {form.formState.errors.email.message || ""}
                </div>
              )}
            </FormItem>
          )}
        />
        {/* subject */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="What's this about?"
                  {...field}
                  className={` ${errorClass("subject")}`}
                />
              </FormControl>
              {form.formState.errors.subject && (
                <div className="text-xs font-mono text-destructive mt-1 flex items-center gap-1">
                  <XCircle className="w-4 h-4" />
                  {form.formState.errors.subject.message || ""}
                </div>
              )}
            </FormItem>
          )}
        />
        {/* message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project…"
                  className={`min-h-[150px] resize-none ${errorClass(
                    "message"
                  )}`}
                  {...field}
                />
              </FormControl>
              {form.formState.errors.message && (
                <div className="text-xs font-mono text-destructive mt-1 flex items-center gap-1">
                  <XCircle className="w-4 h-4" />
                  {form.formState.errors.message.message || ""}
                </div>
              )}
            </FormItem>
          )}
        />

        {/* Submit button with success/error state */}
        {sent === "success" ? (
          <Button
            type="button"
            className="w-full bg-green-600 hover:bg-green-600 text-white border-none flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            <span className="">Message Sent</span>
          </Button>
        ) : sent === "error" ? (
          <Button
            type="button"
            className="w-full bg-destructive hover:bg-destructive text-white border-none flex items-center justify-center gap-2"
          >
            <XCircle className="w-5 h-5" />
            <span className="">{errorMsg}</span>
          </Button>
        ) : (
          <Button type="submit" className="w-full" disabled={sending}>
            {sending ? "Sending…" : "Send Message"}
          </Button>
        )}
      </form>
    </Form>
  );
}
