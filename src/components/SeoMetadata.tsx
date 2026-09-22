import { useEffect } from "react";

interface SeoMetadataProps {
  title: string;
  description: string;
  canonical: string;
}

const upsertMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

const SeoMetadata = ({ title, description, canonical }: SeoMetadataProps) => {
  useEffect(() => {
    const previousTitle = document.title;
    const canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonicalElement?.href;
    const descriptions = [
      ['meta[name="description"]', "name", "description"],
      ['meta[property="og:title"]', "property", "og:title"],
      ['meta[property="og:description"]', "property", "og:description"],
      ['meta[property="og:url"]', "property", "og:url"],
      ['meta[name="twitter:title"]', "name", "twitter:title"],
      ['meta[name="twitter:description"]', "name", "twitter:description"],
    ] as const;
    const previousMeta = descriptions.map(([selector]) => document.head.querySelector<HTMLMetaElement>(selector)?.content);

    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    const canonicalLink = canonicalElement ?? document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = canonical;
    if (!canonicalElement) document.head.appendChild(canonicalLink);

    return () => {
      document.title = previousTitle;
      descriptions.forEach(([selector, attribute, key], index) => {
        const previous = previousMeta[index];
        if (previous) upsertMeta(selector, attribute, key, previous);
      });
      if (previousCanonical) canonicalLink.href = previousCanonical;
    };
  }, [canonical, description, title]);

  return null;
};

export default SeoMetadata;