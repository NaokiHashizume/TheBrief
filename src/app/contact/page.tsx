import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "The Briefへのお問い合わせ。ご質問、ご意見、取材依頼、広告に関するお問い合わせなど、お気軽にご連絡ください。",
  alternates: { canonical: "https://thebrief.info/contact" },
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl font-bold mb-3">Contact</h1>
      <p className="text-sm text-foreground/60 mb-8 leading-relaxed">
        ご質問、ご意見、取材依頼、広告に関するお問い合わせなど、お気軽にご連絡ください。
      </p>

      <ContactForm />

      <div className="mt-12 pt-8 border-t border-brief-border">
        <h2 className="font-serif text-lg font-bold mb-4">Other Ways to Reach Us</h2>
        <div className="space-y-3 text-sm text-foreground/70">
          <p>
            <span className="text-foreground/55 text-xs tracking-wider uppercase">Email</span>
            <br />
            contact@thebrief.info
          </p>
        </div>
      </div>
    </div>
  );
}
