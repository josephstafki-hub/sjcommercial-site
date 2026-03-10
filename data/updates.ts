export type UpdatePost = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  date: string;
  client: string;
  location: string;
  tags: string[];
  heroImage: string;
  excerpt: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  gallery: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  cta: {
    heading: string;
    body: string;
    buttonText: string;
    buttonHref: string;
  };
};

export const updates: UpdatePost[] = [
  {
    slug: "great-clips-shampoo-station-upgrades-duluth-mn",
    seoTitle:
      "Great Clips Shampoo Station Upgrades in Duluth, MN | Mount Royal & Miller Hill",
    metaDescription:
      "SJCommercial completed shampoo station upgrades for Great Clips in Duluth, MN at the Mount Royal and Miller Hill locations, including demolition, plumbing modifications, cabinet adjustments, flooring patching, baseboard installation, and finish work.",
    title: "Great Clips Shampoo Station Upgrades in Duluth, Minnesota",
    subtitle:
      "Tenant improvement work completed at the Mount Royal and Miller Hill locations with plumbing modifications, finish repairs, and minimal disruption to business operations.",
    date: "2026-02-24",
    client: "Great Clips",
    location: "Duluth, Minnesota",
    tags: [
      "Tenant Improvements",
      "Retail Renovation",
      "Salon Renovation",
      "Plumbing Modifications",
      "Finish Carpentry",
    ],
    heroImage: "/images/great-clips-mount-royal-after.jpg",
    excerpt:
      "SJCommercial completed shampoo station upgrades for Great Clips in Duluth, Minnesota, including demolition, plumbing modifications, cabinet adjustments, LVP patching, baseboard installation, and finish work at the Mount Royal and Miller Hill locations.",
    sections: [
      {
        heading: "Mount Royal Great Clips – Shampoo Station Reconfiguration",
        paragraphs: [
          "At the Mount Royal location, the project involved removing older shampoo stations and updating the layout to better fit the new installation.",
          "We removed three existing shampoo sinks and cabinet assemblies. One shampoo station was eliminated entirely, which required coordinating with building maintenance to shut off the water, plugging and capping the plumbing, and patching and repainting the drywall where the removed station had been located.",
          "After demolition and prep were complete, we installed two new shampoo sinks, new floating cabinets, completed the plumbing connections, patched the existing LVP flooring, and installed new baseboard.",
        ],
        bullets: [
          "Removed three existing shampoo sinks and cabinets",
          "Eliminated one station entirely",
          "Coordinated water shutoff with building maintenance",
          "Plugged and capped plumbing",
          "Patched drywall and repainted",
          "Installed two new shampoo sinks",
          "Installed new floating cabinets",
          "Patched LVP flooring and installed new baseboard",
        ],
      },
      {
        heading: "Miller Hill Great Clips – Shampoo Bowl Replacement",
        paragraphs: [
          "At the Miller Hill location, the scope focused on replacing two existing shampoo bowls and adapting the existing setup to fit the new fixtures.",
          "We removed two existing shampoo bowls, installed two new shampoo bowls, and completed the plumbing connections.",
          "Because the original bowls were attached to an older cabinet style, we modified the existing cabinets so the newer style sinks could be installed securely while maintaining a clean finished appearance.",
        ],
        bullets: [
          "Removed two existing shampoo bowls",
          "Installed two new shampoo bowls",
          "Completed plumbing connections",
          "Modified older cabinet assemblies to fit newer bowl style",
        ],
      },
      {
        heading: "Working Efficiently in Occupied Commercial Spaces",
        paragraphs: [
          "Because these were active business locations, the work was scheduled to minimize disruption. We worked late into the evening and into part of the following day to reduce our time on site and help the salons continue operating with as little interruption as possible.",
          "All debris was removed and disposed of at the end of the project.",
        ],
      },
      {
        heading: "Commercial Tenant Improvements for Retail and Service Businesses",
        paragraphs: [
          "SJCommercial provides tenant improvements, build-outs, and turnover work throughout Minnesota for retail and service businesses that need clean execution, clear coordination, and dependable closeout.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/great-clips-mount-royal-before.jpg",
        alt: "Great Clips Mount Royal Duluth MN shampoo station before renovation",
        caption: "Existing shampoo stations at the Mount Royal Great Clips before demolition.",
      },
      {
        src: "/images/great-clips-mount-royal-after.jpg",
        alt: "New floating cabinets and shampoo sinks at Great Clips Mount Royal Duluth MN",
        caption: "Completed Mount Royal installation with new floating cabinets and shampoo sinks.",
      },
    ],
    cta: {
      heading: "Need tenant improvement work for a retail or service business?",
      body: "Request a bid and we’ll take a look at your scope.",
      buttonText: "Request a bid",
      buttonHref: "/#contact",
    },
  },
];

export function getUpdateBySlug(slug: string) {
  return updates.find((post) => post.slug === slug);
}