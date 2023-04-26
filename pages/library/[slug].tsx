import fs from "fs";
import matter from "gray-matter";
import UpdateForm from "../../components/EmailForm";
import Grid from "../../components/Grid";
import SEO from "../../components/SEO";
import BorderCard from "../../components/BorderCard";
import styles from "./[slug].module.scss";
import Head from "next/head";
import markdown from "markdown-it";
import sidenotes from "markdown-it-sidenote";
import footnotes from "markdown-it-footnote";
import toc from "markdown-it-table-of-contents";
import anchor from "markdown-it-anchor";

export default function Library({ titles, files, frontmatter, content }: any) {
  const { title, subtitle, authors, date, type, bannerImage, bannerImageBool } =
    frontmatter;
  const mdWithFootnotes = markdown({ html: true })
    .use(footnotes)
    .use(sidenotes)
    .use(toc, {
      includeLevel: [1, 2, 3],
      listType: "ol"
    })
    .use(anchor);

  return (
    <>
      <Head>
        <meta
            property="og:description"
            content={subtitle}
            key ="og_description"
          />
        <meta property="og:title" content={title} key="og_title"/>
        <meta property="og:image" content={bannerImage} key="og_image"/>
        <meta name="twitter:image" content={bannerImage} key="twitter_image"/>
        <meta name="twitter:image:alt" content="The image representing this document" key="twitter-image_alt"/>
        <meta name="twitter:description" content={subtitle} key="twitter_description"/>
        <meta name="citation_title" content={title} />
        {authors.map(({ name }) => {
          return <meta name="citation_author" content={name} />;
        })}
        <meta name="citation_publication_date" content={date} />
        <meta name="citation_fulltext_world_readable" content="" />
      </Head>
      <div className="w-full flex flex-col relative p-5 md:p-10 lg:p-20 pt-20 lg:pt-10">
        <Grid className="grid-auto-2">
          <div className="fixed col-start-1 col-span-3 row-start-2">
            <a className="no-underline hidden lg:flex" href="/library">
              <p className="text-green text-sm uppercase text-base">
                Back to library
              </p>
            </a>
            <a className="no-underline" href="#">
              <p className="text-green text-sm uppercase fixed bottom-14 hidden lg:flex">
                Back to top
              </p>
            </a>
          </div>
          <div className="col-span-12 lg:col-start-10 lg:col-span-3 row-start-1 row-span-1 hidden lg:flex">
            <BorderCard className="mb-8 lg:pl-8">
              <p className="text-xs text-purple">Author</p>

              {authors.map(({ link, name }) => {
                return (
                  <a
                    key={name}
                    href={link}
                    className="no-underline"
                    target="_blank"
                  >
                    <h6 className="text-base text-purple mt-2">{name}</h6>
                  </a>
                );
              })}

              <p className="hidden lg:flex text-xs text-purple mt-4">
                Date Published
              </p>
              <h6 className="text-base text-purple mt-2 hidden lg:flex">
                {date.replace(/-/g, ".")}
              </h6>
              {/*
              <p className="text-base text-purple mt-2 hidden lg:flex">
                Downloadable PDF [slug]
              </p>
              */}
            </BorderCard>
          </div>
          <div className="row-start-1 row-span-2 col-span-12 lg:col-start-4 lg:col-span-6 ">
            <h4 className="text-left md:mt-10 lg:mt-0 mb-10">{title}</h4>
            <p className="font-semibold mb-10">{subtitle}</p>
            <div className="col-span-12 lg:col-start-10 lg:col-span-3 row-start-1 flex lg:hidden">
              <BorderCard className="mb-12 ">
                <p className="text-sm text-purple">Author(s)</p>
                {authors.map(({ link, name }) => {
                  return (
                    <a href={link} className="no-underline" target="_blank">
                      <h6 className="text-base text-purple mt-2">{name}</h6>
                    </a>
                  );
                })}
                <p className="text-sm text-purple mt-4">Date Published</p>
                <h6 className="text-base text-purple mt-2 ">
                  {date.replace(/-/g, ".")}
                </h6>
              </BorderCard>
            </div>
            {bannerImageBool ? (
              <div className="flex justify-center rounded-md">
                <img
                  src={bannerImage}
                  alt={`Banner image for ${title} blog post`}
                />
              </div>
            ) : (
              ""
            )}

            <div
              className={styles.markdown}
              dangerouslySetInnerHTML={{
                __html: mdWithFootnotes.render(content)
              }}
            />
          </div>
        </Grid>
      </div>

      <UpdateForm />
    </>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", "")
    }
  }));

  // return list of paths
  return {
    paths,
    fallback: false
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }: any) {
  const files = fs.readdirSync("posts");

  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const titles: any = [];

  files.map((file) => {
    const titlePost = fs.readFileSync(`posts/${file}`, "utf-8");
    const { data: postData } = matter(titlePost);
    const href = file.replace(".md", "");
    titles.push({
      title: postData.title,
      link: `/${href}`
    });
  });

  return {
    props: {
      titles,
      files,
      frontmatter,
      content
    }
  };
}
