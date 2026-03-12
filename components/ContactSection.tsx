export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-[#43372f]/20 bg-[#f1eee5]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-serif font-semibold text-[#5a6650]">
            Request a bid
          </h2>
          <p className="mb-6 text-[#43372f]/80">
            Share what you’re trying to accomplish and we’ll follow up with next steps.
          </p>

          <div className="space-y-3 text-sm">
            <div>
  <strong>Phone:</strong>{" "}
  <a
    href="tel:6123616585"
    onClick={() => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "phone_click", {
          event_category: "engagement",
          event_label: "Header Phone Number",
        });
      }
    }}
  >
    612-361-6585
  </a>
</div>
            <div><strong>Email:</strong> commercial@sjcarpentryllc.com</div>
            <div><strong>Service Area:</strong> Minnesota</div>
          </div>
        </div>

        <form className="space-y-4 rounded-2xl border border-[#43372f]/10 bg-white p-6 shadow-sm">
          <input className="w-full rounded-xl border border-[#43372f]/20 bg-white px-4 py-3 outline-none" placeholder="Your name" />
          <input className="w-full rounded-xl border border-[#43372f]/20 bg-white px-4 py-3 outline-none" placeholder="Company" />
          <input className="w-full rounded-xl border border-[#43372f]/20 bg-white px-4 py-3 outline-none" placeholder="Email" type="email" />
          <textarea className="min-h-[140px] w-full rounded-xl border border-[#43372f]/20 bg-white px-4 py-3 outline-none" placeholder="Tell us about your project..." />
          <a
            href="mailto:commercial@sjcarpentryllc.com?subject=SJCommercial%20Bid%20Request"
            className="block rounded-2xl bg-[#5a6650] px-4 py-3 text-center text-white transition hover:bg-[#4d5745]"
          >
            Send Request
          </a>
        </form>
      </div>
    </section>
  );
}