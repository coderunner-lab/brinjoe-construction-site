/**
 * Prepends the Vite base URL to a public asset path.
 * Ensures images resolve correctly on GitHub Pages (or any sub-path deployment).
 *
 * Usage:  asset('/images/hero.png')  →  '/brinjoe-construction-site/images/hero.png'
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL; // includes trailing slash, e.g. "/brinjoe-construction-site/"
  // Strip leading slash from path to avoid double-slash
  const cleaned = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleaned}`;
}
