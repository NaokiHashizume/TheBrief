"use client";

import { useState, type FormEvent } from "react";

type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 環境変数で送信エンドポイントを切替可能(未設定なら mailto: にフォールバック)
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div
        className="p-8 bg-brief-card rounded-xl border border-brief-border text-center"
        role="status"
        aria-live="polite"
      >
        <p className="font-serif text-lg font-bold">Thank you!</p>
        <p className="mt-2 text-sm text-foreground/60">
          お問い合わせを受け付けました。内容を確認の上、ご連絡いたします。
        </p>
      </div>
    );
  }

  function validate(form: HTMLFormElement): FieldErrors {
    const data = new FormData(form);
    const next: FieldErrors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "お名前を入力してください";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "メールアドレスを入力してください";
    else if (!EMAIL_RE.test(email)) next.email = "メールアドレスの形式が正しくありません";
    if (!String(data.get("subject") ?? "")) next.subject = "件名を選択してください";
    if (!String(data.get("message") ?? "").trim()) next.message = "メッセージを入力してください";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) {
      const firstKey = Object.keys(v)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }
    setSubmitError(null);
    setSubmitting(true);

    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // フォールバック: mailto: でクライアント側のメーラーを起動
        const data = new FormData(form);
        const subject = encodeURIComponent(`[The Brief] ${data.get("subject")}`);
        const body = encodeURIComponent(
          `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
        );
        window.location.href = `mailto:contact@thebrief.info?subject=${subject}&body=${body}`;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  }

  const errClass = "mt-1 text-xs text-brief-red";
  const inputBase =
    "w-full px-4 py-3 text-sm border rounded-lg bg-transparent focus:outline-none focus:border-brief-red";

  return (
    <form className="space-y-5" noValidate onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-xs tracking-wider uppercase text-foreground/55 mb-1.5">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${inputBase} ${errors.name ? "border-brief-red" : "border-brief-border"}`}
          placeholder="お名前"
        />
        {errors.name && <p id="name-error" className={errClass}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs tracking-wider uppercase text-foreground/55 mb-1.5">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${inputBase} ${errors.email ? "border-brief-red" : "border-brief-border"}`}
          placeholder="you@example.com"
          autoComplete="email"
        />
        {errors.email && <p id="email-error" className={errClass}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs tracking-wider uppercase text-foreground/55 mb-1.5">
          Subject <span aria-hidden="true">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={`${inputBase} ${errors.subject ? "border-brief-red" : "border-brief-border"}`}
          defaultValue=""
        >
          <option value="">選択してください</option>
          <option value="general">一般的なお問い合わせ</option>
          <option value="feedback">ご意見・ご感想</option>
          <option value="press">取材・メディア関連</option>
          <option value="ads">広告掲載について</option>
          <option value="other">その他</option>
        </select>
        {errors.subject && <p id="subject-error" className={errClass}>{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-wider uppercase text-foreground/55 mb-1.5">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          rows={6}
          className={`${inputBase} resize-vertical ${errors.message ? "border-brief-red" : "border-brief-border"}`}
          placeholder="お問い合わせ内容"
        />
        {errors.message && <p id="message-error" className={errClass}>{errors.message}</p>}
      </div>

      {submitError && (
        <p role="alert" className="text-sm text-brief-red">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="px-8 py-3 text-sm font-medium bg-brief-red text-white rounded-lg hover:opacity-80 transition-opacity disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
