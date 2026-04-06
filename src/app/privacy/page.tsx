import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "The Briefのプライバシーポリシー。個人情報の収集、使用、Cookie、Google AdSenseに関する方針を説明します。",
  alternates: { canonical: "https://thebrief.info/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl font-bold mb-8"><T ja="Privacy Policy" en="Privacy Policy" /></h1>
      <p className="text-sm text-foreground/55 mb-8"><T ja="Last updated: April 4, 2026" en="Last updated: April 4, 2026" /></p>

      <div className="prose-custom space-y-8 text-sm leading-relaxed text-foreground/70">
        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3"><T ja="1. Introduction" en="1. Introduction" /></h2>
          <p>
            <T ja="The Brief（以下「当サイト」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーは、当サイトがどのように情報を収集、使用、保護するかを説明します。" en="The Brief (hereinafter &quot;this site&quot;) respects user privacy and strives to protect personal information. This privacy policy explains how this site collects, uses, and protects information." />
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3"><T ja="2. Collected Information" en="2. Collected Information" /></h2>
          <p><T ja="当サイトでは、以下の情報を収集する場合があります：" en="This site may collect the following information:" /></p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><T ja="アクセスログ（IPアドレス、ブラウザ情報、アクセス日時）" en="Access logs (IP address, browser information, access date/time)" /></li>
            <li><T ja="Cookie情報" en="Cookie information" /></li>
            <li><T ja="ニュースレター登録時のメールアドレス" en="Email address provided during newsletter registration" /></li>
            <li><T ja="お問い合わせフォームから送信された情報" en="Information submitted via the contact form" /></li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3"><T ja="3. Use of Information" en="3. Use of Information" /></h2>
          <p><T ja="収集した情報は、以下の目的で使用します：" en="Collected information is used for the following purposes:" /></p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><T ja="サイトの運営・改善" en="Site operation and improvement" /></li>
            <li><T ja="ニュースレターの配信" en="Newsletter distribution" /></li>
            <li><T ja="お問い合わせへの対応" en="Responding to inquiries" /></li>
            <li><T ja="アクセス解析" en="Access analytics" /></li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3"><T ja="4. Advertising" en="4. Advertising" /></h2>
          <p>
            <T ja="当サイトでは、第三者配信の広告サービス「Google AdSense」を利用しています。Google AdSenseは、ユーザーの興味に基づいた広告を表示するためにCookieを使用することがあります。" en="This site uses the third-party advertising service Google AdSense. Google AdSense may use cookies to display ads based on user interests." />
          </p>
          <p className="mt-2">
            <T ja="Google AdSenseの詳細については、" en="For details about Google AdSense, please refer to the " />
            <a href="https://policies.google.com/technologies/ads" className="text-brief-red hover:underline" target="_blank" rel="noopener noreferrer">
              <T ja="Google広告ポリシー" en="Google Advertising Policies" />
            </a>
            <T ja="をご確認ください。ユーザーは、Googleの広告設定ページからパーソナライズド広告を無効にすることができます。" en=". Users can disable personalized ads from Google's ad settings page." />
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3"><T ja="5. Cookies" en="5. Cookies" /></h2>
          <p>
            <T ja="当サイトでは、サイトの機能向上およびユーザー体験の改善のためにCookieを使用しています。ブラウザの設定によりCookieを無効にすることが可能ですが、一部の機能が制限される場合があります。" en="This site uses cookies to improve site functionality and user experience. You can disable cookies through your browser settings, but some features may be limited." />
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3"><T ja="6. Third-Party Services" en="6. Third-Party Services" /></h2>
          <p><T ja="当サイトでは、以下の第三者サービスを利用しています：" en="This site uses the following third-party services:" /></p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><T ja="Google AdSense（広告配信）" en="Google AdSense (ad delivery)" /></li>
            <li><T ja="Google Analytics（アクセス解析）" en="Google Analytics (access analytics)" /></li>
            <li><T ja="Cloudflare（ホスティング・CDN）" en="Cloudflare (hosting/CDN)" /></li>
          </ul>
          <p className="mt-2">
            <T ja="これらのサービスは、独自のプライバシーポリシーに基づいて情報を収集・処理します。" en="These services collect and process information based on their own privacy policies." />
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3"><T ja="7. Data Protection" en="7. Data Protection" /></h2>
          <p>
            <T ja="当サイトは、収集した情報を適切に管理し、不正アクセス、紛失、改ざんなどを防止するために合理的なセキュリティ対策を講じています。" en="This site appropriately manages collected information and takes reasonable security measures to prevent unauthorized access, loss, and tampering." />
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3"><T ja="8. Policy Changes" en="8. Policy Changes" /></h2>
          <p>
            <T ja="本プライバシーポリシーは、必要に応じて更新されることがあります。重要な変更がある場合は、当サイト上で通知します。" en="This privacy policy may be updated as needed. If there are significant changes, we will notify users on this site." />
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3"><T ja="9. Contact" en="9. Contact" /></h2>
          <p>
            <T ja="プライバシーポリシーに関するお問い合わせは、" en="For inquiries regarding this privacy policy, please contact us via the " />
            <Link href="/contact" className="text-brief-red hover:underline"><T ja="お問い合わせページ" en="contact page" /></Link>
            <T ja="よりご連絡ください。" en="." />
          </p>
        </section>
      </div>
    </div>
  );
}
