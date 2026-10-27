/**
 * Helper to resolve asset paths with GitHub Pages basePath support
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // For custom domain stratomexa.in, basePath is empty string ("").
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${cleanPath}`;
}

