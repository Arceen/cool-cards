import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container w-full border-t border-t-foreground flex justify-between items-start pt-4 text-sm  h-[98px]">
      <p>All rights reserved © 2024 |  Drukland.de</p>
      <div className="flex items-center gap-4">
        <Link href={"/"}>Terms of Use</Link>
        <Link href={"/"}>Sitemap</Link>
        <Link href={"/"}>Company Information</Link>
        <Link href={"/"}>Cookie Settings</Link>
      </div>
    </footer>
  );
}
