import Document, { DocumentContext, DocumentInitialProps, Html, Main, NextScript, Head } from 'next/document'
// import Head from 'next/head';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render = () => (
    <Html lang="en">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
        <link
          rel="preload"
          href="/fonts/Gilroy-Bold.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Gilroy-Heavy.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Gilroy-Light.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Gilroy-Medium.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Gilroy-Regular.woff"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument