import { NextSeo } from "next-seo";

export default function SEO({
  title,
  description,
  imgUrl,
  noSuffix
}: {
  title: string;
  description?: string;
  imgUrl?: string;
  noSuffix?: boolean;
}) {
  const fullTitle = `${title}${noSuffix ? "" : " | Levers For Progress"}`;

  return <NextSeo title={fullTitle} description={description || "TODO"} />;
}
