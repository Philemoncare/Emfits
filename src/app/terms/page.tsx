import PageHeader from "@/components/shared/PageHeader";

export default function TermsPage() {
  const lastUpdated = "June 1, 2026";

  return (
    <main className="bg-white pb-20">
      <PageHeader
        title="Service Terms"
        subtitle={`Last updated: ${lastUpdated}. Please read these terms carefully before using our services.`}
      />

      <section className="app-section">
        <div className="app-container">
          <div className="max-w-3xl mx-auto">
            <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 reveal-up shadow-sm">
                <article className="prose prose-slate max-w-none">
                  <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 mb-6 border-l-4 border-primary pl-4">1. Agreement</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-bold text-sm">
                    By accessing our website or placing an order via WhatsApp, you agree to be bound by these Terms.
                  </p>

                  <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 mb-6 mt-12 border-l-4 border-primary pl-4">2. Orders</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-bold text-sm">
                    Orders can be placed through our mobile-first catalog or via our official WhatsApp line. Payments are accepted via Mobile Money (MoMo) or Cash on Delivery.
                  </p>

                  <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 mb-6 mt-12 border-l-4 border-primary pl-4">3. Delivery</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-bold text-sm">
                    Delivery times are estimates and may vary. It is the customer's responsibility to provide an accurate delivery address in Ghana.
                  </p>

                  <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 mb-6 mt-12 border-l-4 border-primary pl-4">4. Support</h3>
                  <p className="text-slate-500 mb-0 leading-relaxed font-bold text-sm">
                    For any support regarding your hygiene essentials, please contact us on WhatsApp at +233 20 270 6607.
                  </p>
                </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
