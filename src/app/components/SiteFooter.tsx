import GlassDock from "./GlassDock";

export default function SiteFooter() {
  return (
    <footer className="relative bg-[#111] px-6 py-12 text-white">
      <GlassDock />

      <div className="border-t border-gray-600"></div>

      <p className="mt-6 text-center text-sm text-gray-300">
        Copyright © 2026 CodeWithDubem.
      </p>
    </footer>
  );
}
