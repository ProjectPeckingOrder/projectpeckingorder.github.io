import {readFile, stat} from 'node:fs/promises';
import assert from 'node:assert/strict';
const pages = ['index.html', 'features.html', 'start-here.html', 'club-kit.html', 'user-manual.html', 'privacy-policy.html', 'terms-of-use.html'];
const html = Object.fromEntries(await Promise.all(pages.map(async p => [p, await readFile(`dist/${p}`, 'utf8')])));
for (const [name, source] of Object.entries(html)) {
  assert.match(source, /<title>[^<]+<\/title>/);
  assert.equal((source.match(/<h1\b/g) ?? []).length, 1, `${name}: one H1`);
  assert.match(source, /<meta name="description" content="[^"]+"/);
  assert.match(source, /<link rel="canonical" href="https:\/\/projectpeckingorder.com\//);
  const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(ids.length,new Set(ids).size,`${name}: duplicate anchor`);
  for (const match of source.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const link = match[1];
    if (/^(https?:|mailto:|data:)/.test(link)) continue;
    const [file, fragment] = link.split('#');
    const target = file || name;
    await stat(`dist/${target}`);
    if (fragment) assert.ok(html[target]?.includes(`id="${fragment}"`),`${name}: missing ${link}`);
  }
  for (const img of source.matchAll(/<img\b[^>]*>/g)) assert.match(img[0], /\balt="/);
  for (const script of source.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(script[1]);
}
const sitemap = await readFile('dist/sitemap.xml','utf8');
for (const name of pages) assert.ok(sitemap.includes(`https://projectpeckingorder.com/${name==='index.html'?'':name}`));
assert.ok(!(await readFile('dist/robots.txt','utf8')).includes('github.io'));
assert.ok(!html['user-manual.html'].includes('It does not unlock Home or Full Breeder features by itself.'));
console.log(`Checked ${pages.length} pages: titles, headings, canonical links, local links/anchors, images, structured data and sitemap.`);
