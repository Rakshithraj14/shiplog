import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import { siteConfig } from "./site-config";

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypePrettyCode, {
    theme: { light: "github-light", dark: "github-dark" },
  })
  .use(rehypeStringify, { allowDangerousHtml: true });

export async function markdownToHtml(markdown: string): Promise<string> {
  const html = String(await processor.process(markdown));

  // next/image and next/link rewrite basePath automatically; raw HTML/markdown
  // image src emitted from content does not, so fix it up here.
  return siteConfig.basePath
    ? html.replace(/(src|href)="\/(?!\/)/g, `$1="${siteConfig.basePath}/`)
    : html;
}
