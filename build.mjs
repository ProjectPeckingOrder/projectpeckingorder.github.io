import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';

// Publish only this explicit set of public pages and assets, never the repo.
await mkdir(new URL('./dist/', import.meta.url), {recursive: true});
for (const name of ['index.html', 'user-manual.html', 'privacy-policy.html', 'terms-of-use.html', 'styles.css', 'robots.txt', 'sitemap.xml', '_headers']) {
  const source = new URL(name, import.meta.url);
  let content = await readFile(source, 'utf8');
  content = content.replaceAll('https://projectpeckingorder.github.io', 'https://projectpeckingorder.com');
  await writeFile(new URL(`./dist/${name}`, import.meta.url), content);
}
await cp(new URL('./assets/', import.meta.url), new URL('./dist/assets/', import.meta.url), {recursive: true});
console.log('Public website prepared in dist.');
