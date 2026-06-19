import type { NextConfig } from "next";

const repo = "portfolio";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repo}` : "",
  },
};

export default nextConfig;
