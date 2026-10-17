// Post-build: the VS Code portfolio moved from /portfolio/<page>/ to /portfolio/vscode/<page>/.
// Writes tiny static redirect pages at the old addresses so existing links keep working.
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const base = process.env.GITHUB_ACTIONS === 'true' ? '/portfolio' : '';
const pages = ['about', 'contact', 'credentials', 'github', 'projects', 'settings'];

for (const page of pages) {
  const to = `${base}/vscode/${page}/`;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved: ${page}</title>
<meta name="robots" content="noindex"><link rel="canonical" href="https://olishiz.github.io/portfolio/vscode/${page}/">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)} + location.search + location.hash)</script></head>
<body style="font-family:system-ui,sans-serif;background:#f8f8f6;color:#262624;padding:40px">
<p>This page moved to <a href="${to}">${to}</a>.</p></body></html>
`;
  await mkdir(join('out', page), { recursive: true });
  await writeFile(join('out', page, 'index.html'), html);
}
console.log(`redirects: wrote ${pages.length} pages -> ${base}/vscode/*`);
