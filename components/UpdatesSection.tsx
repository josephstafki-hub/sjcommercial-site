import Link from "next/link";
import { updates } from "../data/updates";

export default function UpdatesSection() {
  const isSingle = updates.length === 1;

  return (
    <section id="updates" className="border-t border-[#43372f]/20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-serif font-semibold text-[#5a6650]">Project updates</h2>
          <p className="mt-3 max-w-2xl text-[#43372f]/80">
            Searchable job updates designed to grow SEO over time.
          </p>
        </div>

        {updates.length >= 2 && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-[#43372f]/10 shadow-sm">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#f1eee5] px-3 py-1 text-xs text-[#43372f]">Brand partnership</span>
                  <span className="rounded-full bg-[#f1eee5] px-3 py-1 text-xs text-[#43372f]">Great Clips</span>
                  <span className="rounded-full bg-[#f1eee5] px-3 py-1 text-xs text-[#43372f]">Tenant Improvements</span>
                </div>
                <h3 className="mt-4 text-2xl font-serif font-semibold text-[#5a6650]">
                  Great Clips TI + build-out support in Minnesota
                </h3>
                <p className="mt-3 text-[#43372f]/80">
                  We support Great Clips with responsive turnover work, finish carpentry, coordinated TI scopes, and dependable closeout.
                </p>
              </div>
              <div className="flex aspect-[4/3] items-center justify-center bg-[#f1eee5] text-sm text-[#43372f]/50 md:aspect-auto">
                Featured photo / collage
              </div>
            </div>
          </div>
        )}

        <div className={isSingle ? "grid md:grid-cols-1" : "grid gap-6 md:grid-cols-3"}>
          {updates.map((post) => (
            <article
              key={post.slug}
              className={
                "overflow-hidden rounded-2xl border border-[#43372f]/10 bg-white shadow-sm " +
                (isSingle ? "mx-auto max-w-3xl" : "")
              }
            >
              <div className="aspect-[16/10] bg-[#f1eee5]">
                <img src={post.heroImage} alt={post.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#f1eee5] px-3 py-1 text-xs text-[#43372f]">{post.client}</span>
                  <span className="text-xs text-[#43372f]/60">{post.location}</span>
                </div>
                <h3 className="mt-4 text-2xl font-serif font-semibold text-[#5a6650]">{post.title}</h3>
                <p className="mt-3 text-[#43372f]/75">{post.excerpt}</p>
                <div className="mt-5">
                  <Link
                    href={`/updates/${post.slug}`}
                    className="inline-block rounded-2xl bg-[#5a6650] px-4 py-3 text-white transition hover:bg-[#4d5745]"
                  >
                    Read update
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}