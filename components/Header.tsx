import Link from "next/link";

function Logo() {
  return (
    <img
  src="/logo.jpg"
  alt="SJCommercial"
  className="h-full w-full object-contain"
/>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#43372f]/20 bg-[#f1eee5]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[#43372f]/20 bg-white shadow-sm">
            <Logo />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide text-[#43372f]">SJCommercial</div>
            <div className="text-xs text-[#43372f]/65">a division of SJCarpentry</div>
          </div>
        </Link>

        <Link
          href="/#contact"
          className="rounded-2xl bg-[#5a6650] px-4 py-2 text-sm text-white transition hover:bg-[#4d5745]"
        >
          Request a bid
        </Link>
      </div>
    </header>
  );
}