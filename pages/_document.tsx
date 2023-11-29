import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript
} from "next/document";

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;


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
          <meta
            property="og:description"
            content="An open collection of policies, tactics, and reforms modern institutions use to advance their scientific and technological output."
            key="og_description"
          />
          <meta
            property="og:title"
            content="Levers for Progress"
            key="og_title"
          />
          <meta property="og:image" content="/index-topbanner.png" key="og_image" />
          <meta property="og:image:type" content="image/png" />
          <meta name="twitter:site" content="TODO" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Levers for Progress" />
          <meta
            name="twitter:image"
            content="/index-hero.png"
            key="twitter_image"
          />
          <meta
            name="twitter:image:alt"
            content="/index-topbanner.png"
            key="twitter_image_alt"
          />
          <meta
            name="twitter:description"
            content=" A Living Database of Methods to Accelerate Science and Technology. By Kelvin Yu and Anson Yu"
            key="twitter_description"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  
        {/* Google Analytics Measurement ID*/}
        <script async src={gtag} />
        {/* Inject the GA tracking code with the Measurement ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname
              });
            `,
          }}
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
