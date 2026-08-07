import { z } from "zod";

export const postFrontmatterSchema = z.object({
  title: z.string(),
  date: z.string(),
  excerpt: z.string(),
  coverImage: z.string().optional(),
  coverImagePosition: z.enum(["top", "center", "bottom"]).default("center"),
  tags: z.array(z.string()).default([]),
  links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
});

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;

export const COVER_IMAGE_POSITION_CLASS: Record<
  PostFrontmatter["coverImagePosition"],
  string
> = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};
