import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getPost } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import { Button } from "@/components/Button";
import { COVER_IMAGE_POSITION_CLASS } from "@/lib/schema";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getPost(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: post.date,
        images: post.coverImage ? [post.coverImage] : undefined,
      },
    };
  } catch {
    return {};
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const html = await markdownToHtml(post.content);
  const date = new Date(post.date);

  return (
    <article className="mx-auto max-w-2xl px-4 py-12">
      <header className="mb-8">
        {post.tags[0] && (
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            {post.tags[0]}
          </p>
        )}
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-neutral-500">
          {Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date)}
        </p>
      </header>
      {post.coverImage && (
        <div className="mb-8 aspect-video w-full overflow-hidden rounded-xl shadow-lg shadow-black/20">
          {/* eslint-disable-next-line @next/next/no-img-element -- arbitrary external URLs, no next.config allowlisting needed */}
          <img
            src={post.coverImage}
            alt=""
            className={`h-full w-full object-cover ${COVER_IMAGE_POSITION_CLASS[post.coverImagePosition]}`}
          />
        </div>
      )}
      <div
        className="prose prose-neutral dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {post.links.length > 0 && (
        <div className="mt-10 flex flex-wrap justify-between gap-3">
          {post.links.map((link) => (
            <Button
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              {link.label}
            </Button>
          ))}
        </div>
      )}
    </article>
  );
}
