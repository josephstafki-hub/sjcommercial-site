import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ContactSection from "../../../components/ContactSection";
import { getUpdateBySlug, updates } from "../../../data/updates";

export function generateStaticParams() {
  return updates.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getUpdateBySlug(slug);

  if (!post) {
    return {
      title: "Update not found",
    };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://commercial.sjcarpentryllc.com/updates/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `https://commercial.sjcarpentryllc.com/updates/${post.slug}`,
      siteName: "SJCommercial",
      type: "article",
      images: [
        {
          url: post.heroImage,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function UpdatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getUpdateBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#f1eee5] text-[#43372f]">
      <Header />

          <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.metaDescription,
          image: post.heroImage,
          datePublished: new Date(post.date).toISOString(),
          author: {
            "@type": "Organization",
            name: "SJCommercial",
          },
          publisher: {
            "@type": "Organization",
            name: "SJCommercial",
          },
        }),
      }}
    />

    <main className="bg-white">
        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#f1eee5] px-3 py-1 text-xs text-[#43372f]">
              {post.client}
            </span>
            <span className="text-xs text-[#43372f]/60">{post.location}</span>
            <span className="text-xs text-[#43372f]/60">{post.date}</span>
          </div>

          <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight text-[#5a6650] md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-[#43372f]/80">{post.subtitle}</p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#43372f]/10 shadow-sm">
            <img
              src={post.heroImage}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-serif font-semibold text-[#5a6650]">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[#43372f]/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-[#43372f]/80">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-serif font-semibold text-[#5a6650]">
              Project gallery
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {post.gallery.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-2xl border border-[#43372f]/10 bg-[#f1eee5] shadow-sm"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="p-4 text-sm text-[#43372f]/75">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-[#f1eee5] p-6">
            <h2 className="text-2xl font-serif font-semibold text-[#5a6650]">
              {post.cta.heading}
            </h2>
            <p className="mt-3 text-[#43372f]/80">{post.cta.body}</p>
            <div className="mt-5">
              <a
                href={post.cta.buttonHref}
                className="inline-block rounded-2xl bg-[#5a6650] px-5 py-3 text-white transition hover:bg-[#4d5745]"
              >
                {post.cta.buttonText}
              </a>
            </div>
          </section>
        </article>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}