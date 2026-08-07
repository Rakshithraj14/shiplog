import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-auto">
      <div className="px-6 md:px-12 py-6 text-sm text-neutral-500">
        © {new Date().getFullYear()} {siteConfig.author} ·{" "}
        <a href={`${siteConfig.basePath}/rss.xml`} className="underline">
          RSS
        </a>
      </div>
    </footer>
  );
}
