import { getAllPosts, groupPostsByTag } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const groups = groupPostsByTag(getAllPosts());

  return (
    <div className="px-6 md:px-12">
      <section className="py-16 sm:py-24">
        <h1 className="max-w-2xl text-4xl sm:text-5xl font-bold tracking-tight">
          {siteConfig.tagline}
        </h1>
        <p className="mt-4 max-w-xl text-neutral-600 dark:text-neutral-400">
          {siteConfig.description}
        </p>
      </section>

      <section className="pb-24">
        {groups.map(({ tag, posts }) => (
          <div key={tag} className="mb-12 last:mb-0">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {tag}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
