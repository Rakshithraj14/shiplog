import Link from "next/link";
import { COVER_IMAGE_POSITION_CLASS, type Post } from "@/lib/schema";

export function PostCard({ post }: { post: Post }) {
  const date = new Date(post.date);
  const category = post.tags[0];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-200 hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10"
    >
      <div className="relative flex h-44 items-end overflow-hidden bg-gradient-to-br from-sky-500/20 via-neutral-900 to-neutral-950 p-4">
        {post.coverImage && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- arbitrary external URLs, no next.config allowlisting needed */}
            <img
              src={post.coverImage}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover ${COVER_IMAGE_POSITION_CLASS[post.coverImagePosition]}`}
            />
            <div className="absolute inset-0 bg-black/40" />
          </>
        )}
        {category && (
          <span className="relative text-xs font-medium uppercase tracking-wide text-sky-300">
            {category}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h2 className="text-lg font-semibold leading-snug group-hover:text-sky-500 transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3 text-xs text-neutral-500">
          <span>
            {Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date)}
          </span>
          <span className="font-medium text-sky-500 group-hover:underline">
            Read More &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
