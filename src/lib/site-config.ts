const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "shiplog";
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0]?.toLowerCase() ?? "rakshithraj14";
const basePath = process.env.GITHUB_ACTIONS ? `/${repo}` : "";

export const siteConfig = {
  title: "Shiplog",
  tagline: "A running log of what I build and ship.",
  description:
    "Deep dives on AI engineering, MLOps pipelines, and full-stack projects plus the occasional post on what broke along the way.",
  author: "Rakshith",
  siteUrl: `https://${owner}.github.io/${repo}`,
  basePath,
  profile: {
    name: "Rakshith Raj",
    role: "AI Engineer • MLOps • Full-Stack Developer",
    github: "https://github.com/Rakshithraj14",
    linkedin: "https://www.linkedin.com/in/rakshith-raj-m-48344b2aa/",
    resume: "", // TODO: add resume URL
  },
};
