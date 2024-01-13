import React from "react";
import { NextSeo } from 'next-seo';

export default function SEO({
  title,
  description,
  noSuffix,
}: {
  title: string;
  description?: string;
  imgUrl?: string;
  noSuffix?: boolean;
}) {
  const fullTitle = `${title}${noSuffix ? '' : ' | Levers for Progress'}`;

  return (
    <NextSeo
      title={fullTitle}
      description={
        description ||
        ' A Living Database of Methods to Advance Science and Technology'
      }
    />
  );
}
