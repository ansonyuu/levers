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
  const fullTitle = `${title}${noSuffix ? "" : " | Speculative Technologies"}`;

  return (
    <NextSeo
      title={fullTitle}
      description={
        description ||
        "Speculative technologies is a nonprofit research organization that runs coordinated research programs to unlock big-if-true technologies that are too speculative to be a startup but are too coordination- or engineering-heavy for academia alone."
      }
    />
  );
}
