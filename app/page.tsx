import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import UpdatesSection from "../components/UpdatesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f1eee5] text-[#43372f]">
      <Header />

      <section className="relative bg-[#f1eee5]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, #5a6650 0%, transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-24">
          <div className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm text-[#43372f] shadow-sm">
            Tenant Improvements • Build-Outs • Turnover Work
          </div>
          <h1 className="mb-6 max-w-4xl text-4xl font-serif font-semibold tracking-tight text-[#5a6650] md:text-6xl">
            Tenant improvements and build-outs delivered with tight scopes and dependable closeout.
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-[#43372f]/80">
            SJCommercial helps property managers and business owners execute commercial projects across Minnesota with clarity, communication, and professional jobsite standards.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-2xl bg-[#5a6650] px-5 py-3 text-white transition hover:bg-[#4d5745]"
          >
            Request a bid
          </a>
        </div>
      </section>

      <section className="border-t border-[#43372f]/20 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-serif font-semibold text-[#5a6650]">
              Commercial contractor services in Minnesota
            </h2>
            <p className="mt-4 text-[#43372f]/80">
              SJCommercial provides tenant improvements, commercial build-outs,
              make-ready work, and turnover scopes for retail and service
              businesses throughout Minnesota.
            </p>
            <p className="mt-4 text-[#43372f]/80">
              Our work often includes fixture replacement, finish carpentry,
              light demolition, cabinet modifications, flooring patching, trim
              repairs, punch list completion, and coordinated closeout in active
              commercial spaces.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#43372f]/10 bg-[#f1eee5] p-5">
              <h3 className="text-lg font-semibold text-[#5a6650]">
                Typical scopes
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#43372f]/80">
                <li>Tenant improvements</li>
                <li>Commercial build-outs</li>
                <li>Turnover and make-ready work</li>
                <li>Fixture and finish updates</li>
                <li>Punch list completion</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#43372f]/10 bg-[#f1eee5] p-5">
              <h3 className="text-lg font-semibold text-[#5a6650]">
                Good fit projects
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#43372f]/80">
                <li>Salons and personal service spaces</li>
                <li>Retail tenant improvement work</li>
                <li>Occupied commercial interiors</li>
                <li>Fast-turn refresh projects</li>
                <li>Small to midsize commercial scopes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <UpdatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}