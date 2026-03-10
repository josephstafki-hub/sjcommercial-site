import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#43372f]/20 bg-[#f1eee5] py-8 text-center text-sm text-[#43372f]/60">
      <div>© {new Date().getFullYear()} SJCarpentry LLC</div>
      <div className="mt-2">
        <a
          href="https://www.sjcarpentryllc.com/home"
          target="_blank"
          rel="noreferrer"
          className="underline-offset-4 hover:underline"
        >
          Residential division: SJCarpentry
        </a>
      </div>
      <div className="mt-2">
        <Link href="/updates/great-clips-shampoo-station-upgrades-duluth-mn" className="underline-offset-4 hover:underline">
          Latest update
        </Link>
      </div>
    </footer>
  );
}