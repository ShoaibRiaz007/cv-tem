"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail } from "@/lib/emailjs";
import Silk from "../ui/silk";

const contactSchema = z.object({
  email: z.email("Invalid email address"),
  name: z.string().min(1, "Name is required").max(100),
  message: z.string().min(1, "Message is required").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  async function onSubmit(values: ContactFormValues) {
    const result = await sendContactEmail(values);

    if (result.success) {
      toast.success("Message sent successfully");
      form.reset();
    } else {
      toast.error(result.error || "Failed to send message");
    }
  }

  return (
    <MaxWidthWrapper parentBorder="border-b">
      <div
        id="contact"
        className="w-full relative min-h-[70vh] md:min-h-[60vh]"
      >
        <div className="absolute inset-0 invert dark:invert-0 w-full h-full">
          <Silk
            speed={5}
            scale={1}
            color="#a855f7"
            noiseIntensity={1.5}
          />
        </div>
        <div className="absolute inset-0 w-full max-w-[90%] md:max-w-2/3 mx-auto flex flex-col items-center justify-center py-12 px-4">
          <div className="text-center mb-8 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[4px] text-purple-400">Connect</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text">Let&apos;s Build Something Epic</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Ready to level up? Drop me a message and let&apos;s create something extraordinary.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6 md:p-8 w-full max-w-md">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-6"
            >
              <FieldGroup>
                <Field data-invalid={!!errors.name}>
                  <FieldLabel htmlFor="contact-name" className="text-sm font-medium text-muted-foreground">Name</FieldLabel>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    className="bg-white/5 border-purple-500/20 text-foreground placeholder:text-muted-foreground/50 focus:border-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] focus:ring-1 focus:ring-purple-500/30 rounded-lg transition-all"
                    {...register("name")}
                  />
                  <FieldError errors={errors.name ? [errors.name] : undefined} />
                </Field>
                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor="contact-email" className="text-sm font-medium text-muted-foreground">Email</FieldLabel>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    className="bg-white/5 border-purple-500/20 text-foreground placeholder:text-muted-foreground/50 focus:border-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] focus:ring-1 focus:ring-purple-500/30 rounded-lg transition-all"
                    {...register("email")}
                  />
                  <FieldError
                    errors={errors.email ? [errors.email] : undefined}
                  />
                </Field>
                <Field data-invalid={!!errors.message}>
                  <FieldLabel htmlFor="contact-message" className="text-sm font-medium text-muted-foreground">Message</FieldLabel>
                  <Textarea
                    id="contact-message"
                    placeholder="Your message..."
                    rows={5}
                    className="min-h-[120px] resize-none bg-white/5 border-purple-500/20 text-foreground placeholder:text-muted-foreground/50 focus:border-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] focus:ring-1 focus:ring-purple-500/30 rounded-lg transition-all"
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  <FieldError
                    errors={errors.message ? [errors.message] : undefined}
                  />
                </Field>
              </FieldGroup>
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="gradient-btn w-full py-3 rounded-full text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin mx-auto" />
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Contact;
