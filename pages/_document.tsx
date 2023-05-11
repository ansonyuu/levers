import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://leversforprogress.com" />
          <meta property="og:description" content="TODO" key="og_description" />
          <meta property="og:title" content="TODO" key="og_title" />
          <meta property="og:image" content="/TODO" key="og_image" />
          <meta property="og:image:type" content="image/png" />
          <meta name="twitter:site" content="TODO" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="TODO" />
          <meta
            name="twitter:image"
            content="/index-hero.png"
            key="twitter_image"
          />
          <meta
            name="twitter:image:alt"
            content="TODO"
            key="twitter_image_alt"
          />
          <meta
            name="twitter:description"
            content="TODO"
            key="twitter_description"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
