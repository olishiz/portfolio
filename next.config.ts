import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? '/portfolio' : '',
  assetPrefix: isGitHubPages ? '/portfolio/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? '/portfolio' : '',
  },
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'github.com', protocol: 'https' },
    ],
  },
};

export default nextConfig;
