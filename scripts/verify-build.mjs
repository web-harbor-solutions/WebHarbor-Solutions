import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  console.error('FAIL: dist/ directory does not exist. Run npm run build first.');
  process.exit(1);
}

// 1. Collect all HTML files in dist/
function getHtmlFiles(dir, fileList = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) getHtmlFiles(full, fileList);
    else if (entry.name.endsWith('.html')) fileList.push(full);
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(distDir);
let errors = [];

// Required routes check
const requiredRoutes = [
  'index.html',
  'how-it-works/index.html',
  'services/index.html',
  'pricing/index.html',
  'portfolio/index.html',
  'about/index.html',
  'contact/index.html',
  'privacy/index.html',
  'terms/index.html',
  'liability/index.html',
  '404.html'
];

for (const route of requiredRoutes) {
  const altRoute = route.replace('/index.html', '.html');
  if (!fs.existsSync(path.join(distDir, route)) && !fs.existsSync(path.join(distDir, altRoute))) {
    errors.push(`Missing required compiled route: ${route}`);
  }
}

// 2. Scan every HTML file for forbidden strings & broken internal links
const forbiddenPatterns = [
  /Jason\s*Gill/i,
  /US\s*LLC/i,
  /\bSECP\b/i,
  /\/demos\//i
];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relFile = path.relative(distDir, file);

  for (const pattern of forbiddenPatterns) {
    if (pattern.test(content)) {
      errors.push(`Forbidden term or dead /demos/ reference matching ${pattern} found in ${relFile}`);
    }
  }

  // Extract internal hrefs
  const hrefRegex = /href=["'](\/[^"'#?]*)["']/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    if (href === '/') continue;
    const cleanHref = href.replace(/\/$/, '');
    const candidateIndex = path.join(distDir, cleanHref, 'index.html');
    const candidateHtml = path.join(distDir, `${cleanHref}.html`);
    const candidateRaw = path.join(distDir, cleanHref);

    if (!fs.existsSync(candidateIndex) && !fs.existsSync(candidateHtml) && !fs.existsSync(candidateRaw)) {
      errors.push(`Broken internal link href="${href}" found in ${relFile}`);
    }
  }
}

if (errors.length > 0) {
  console.error('❌ VERIFICATION FAILED:');
  errors.forEach((e) => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log(`✅ VERIFICATION PASSED: ${htmlFiles.length} HTML pages audited, 0 broken links, 0 forbidden terms.`);
}
