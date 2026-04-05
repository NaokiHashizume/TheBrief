import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "The Briefのプライバシーポリシー。個人情報の収集、使用、Cookie、Google AdSenseに関する方針を説明します。",
  alternates: { canonical: "https://thebrief.info/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-foreground/55 mb-8">Last updated: April 4, 2026</p>

      <div className="prose-custom space-y-8 text-sm leading-relaxed text-foreground/70">
        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">1. Introduction</h2>
          <p>
            The Brief（以下「当サイト」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーは、当サイトがどのように情報を収集、使用、保護するかを説明します。
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">2. Collected Information</h2>
          <p>当サイトでは、以下の情報を収集する場合があります：</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>アクセスログ（IPアドレス、ブラウザ情報、アクセス日時）</li>
            <li>Cookie情報</li>
            <li>ニュースレター登録時のメールアドレス</li>
            <li>お問い合わせフォームから送信された情報</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">3. Use of Information</h2>
          <p>収集した情報は、以下の目的で使用します：</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>サイトの運営・改善</li>
            <li>ニュースレターの配信</li>
            <li>お問い合わせへの対応</li>
            <li>アクセス解析</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">4. Advertising</h2>
          <p>
            当サイトでは、第三者配信の広告サービス「Google AdSense」を利用しています。Google AdSenseは、ユーザーの興味に基づいた広告を表示するためにCookieを使用することがあります。
          </p>
          <p className="mt-2">
            Google AdSenseの詳細については、
            <a href="https://policies.google.com/technologies/ads" className="text-brief-red hover:underline" target="_blank" rel="noopener noreferrer">
              Google広告ポリシー
            </a>
            をご確認ください。ユーザーは、Googleの広告設定ページからパーソナライズド広告を無効にすることができます。
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">5. Cookies</h2>
          <p>
            当サイトでは、サイトの機能向上およびユーザー体験の改善のためにCookieを使用しています。ブラウザの設定によりCookieを無効にすることが可能ですが、一部の機能が制限される場合があります。
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">6. Third-Party Services</h2>
          <p>当サイトでは、以下の第三者サービスを利用しています：</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Google AdSense（広告配信）</li>
            <li>Google Analytics（アクセス解析）</li>
            <li>Cloudflare（ホスティング・CDN）</li>
          </ul>
          <p className="mt-2">
            これらのサービスは、独自のプライバシーポリシーに基づいて情報を収集・処理します。
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">7. Data Protection</h2>
          <p>
            当サイトは、収集した情報を適切に管理し、不正アクセス、紛失、改ざんなどを防止するために合理的なセキュリティ対策を講じています。
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">8. Policy Changes</h2>
          <p>
            本プライバシーポリシーは、必要に応じて更新されることがあります。重要な変更がある場合は、当サイト上で通知します。
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">9. Contact</h2>
          <p>
            プライバシーポリシーに関するお問い合わせは、
            <Link href="/contact" className="text-brief-red hover:underline">お問い合わせページ</Link>
            よりご連絡ください。
          </p>
        </section>
      </div>
    </div>
  );
}
