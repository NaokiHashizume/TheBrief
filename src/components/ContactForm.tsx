"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="p-8 bg-white rounded-xl border border-brief-border text-center">
        <p className="font-serif text-lg font-bold">Thank you!</p>
        <p className="mt-2 text-sm text-foreground/50">
          お問い合わせを受け付けました。内容を確認の上、ご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      action="mailto:contact@thebrief.info"
      method="POST"
      encType="text/plain"
      onSubmit={() => {
        setTimeout(() => setSubmitted(true), 100);
      }}
    >
      <div>
        <label htmlFor="name" className="block text-xs tracking-wider uppercase text-foreground/40 mb-1.5">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full px-4 py-3 text-sm border border-brief-border rounded-lg bg-transparent focus:outline-none focus:border-brief-red"
          placeholder="お名前"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs tracking-wider uppercase text-foreground/40 mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full px-4 py-3 text-sm border border-brief-border rounded-lg bg-transparent focus:outline-none focus:border-brief-red"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs tracking-wider uppercase text-foreground/40 mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          required
          className="w-full px-4 py-3 text-sm border border-brief-border rounded-lg bg-transparent focus:outline-none focus:border-brief-red"
        >
          <option value="">選択してください</option>
          <option value="general">一般的なお問い合わせ</option>
          <option value="feedback">ご意見・ご感想</option>
          <option value="press">取材・メディア関連</option>
          <option value="ads">広告掲載について</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-wider uppercase text-foreground/40 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          className="w-full px-4 py-3 text-sm border border-brief-border rounded-lg bg-transparent focus:outline-none focus:border-brief-red resize-vertical"
          placeholder="お問い合わせ内容"
        />
      </div>

      <button
        type="submit"
        className="px-8 py-3 text-sm font-medium bg-brief-red text-white rounded-lg hover:opacity-80 transition-opacity"
      >
        Send Message
      </button>
    </form>
  );
}
