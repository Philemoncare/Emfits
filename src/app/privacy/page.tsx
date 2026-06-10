import PageHeader from "@/components/shared/PageHeader";

export default function PrivacyPage() {
  const lastUpdated = "June 1, 2026";

  return (
    <main className="bg-white pb-20">
      <PageHeader
        title="Privacy Policy"
        subtitle={`Last updated: ${lastUpdated}. Your privacy is important to us. Learn how we handle your data.`}
      />

      <section className="app-section">
        <div className="app-container">
          <div className="max-w-3xl mx-auto">
            <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 reveal-up shadow-sm">
                <article className="prose prose-slate max-w-none">
                  <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 mb-6 border-l-4 border-primary pl-4">1. Introduction</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-bold text-sm">
                    Welcome to Emfits Enterprise. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.
                  </p>

                  <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 mb-6 mt-12 border-l-4 border-primary pl-4">2. Collection</h3>
                  <p className="text-slate-500 mb-4 leading-relaxed font-bold text-sm">
                    We collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="text-slate-500 mb-8 list-disc pl-6 leading-relaxed font-bold text-sm space-y-2">
                    <li>Place an order via WhatsApp.</li>
                    <li>Contact us through our support forms.</li>
                    <li>Request wholesale pricing.</li>
                  </ul>

                  <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 mb-6 mt-12 border-l-4 border-primary pl-4">3. Security</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-bold text-sm">
                    We aim to protect your personal information through a system of organizational and technical security measures. Your data is used only for fulfilling orders and logistics in Ghana.
                  </p>

                  <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 mb-6 mt-12 border-l-4 border-primary pl-4">4. Contact</h3>
                  <p className="text-slate-500 mb-0 leading-relaxed font-bold text-sm">
                    If you have questions about this policy, contact us via WhatsApp at +233 20 270 6607.
                  </p>
                </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
