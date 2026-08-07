import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const { github, linkedin, resume } = siteConfig.profile;

  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-12 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt={siteConfig.title} width={48} height={48} />
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            GitHub
          </a>
          <span className="text-neutral-600">•</span>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            LinkedIn
          </a>
          {resume && (
            <>
              <span className="text-neutral-600">•</span>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:underline"
              >
                Resume
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
