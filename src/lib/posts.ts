import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postFrontmatterSchema, type Post } from "./schema";

const postsDirectory = path.join(process.cwd(), "content/posts");

function getSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const result = postFrontmatterSchema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Invalid frontmatter in content/posts/${slug}.md: ${result.error.message}`,
    );
  }

  return { ...result.data, slug, content };
}

export function getAllPosts(): Post[] {
  return getSlugs()
    .map(getPostBySlug)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(slug: string): Post {
  return getPostBySlug(slug);
}

export function groupPostsByTag(posts: Post[]): { tag: string; posts: Post[] }[] {
  const groups = new Map<string, Post[]>();
  for (const post of posts) {
    const tag = post.tags[0] ?? "uncategorized";
    const group = groups.get(tag) ?? [];
    group.push(post);
    groups.set(tag, group);
  }

  // posts are already date-sorted, so each group's first post is its most recent
  return [...groups.entries()]
    .map(([tag, groupPosts]) => ({ tag, posts: groupPosts }))
    .sort((a, b) => (a.posts[0].date > b.posts[0].date ? -1 : 1));
}

export function getAllSlugs(): string[] {
  return getSlugs();
}
