import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      // ...
      <Html>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-4LK05V98V8"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
             window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4LK05V98V8');
            `,
            }}
          />
          {/* <!-- Primary Meta Tags --> */}
          <title>Create pokemon messages and share</title>
          <meta name="title" content="Create pokemon messages and share" />
          <meta
            name="description"
            content="create short pokemon messages and share with the world"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="poki-mu.vercel.app" />
          <meta
            property="og:title"
            content="Create pokemon messages and share"
          />
          <meta
            property="og:description"
            content="create short pokemon messages and share with the world"
          />
          <meta
            property="og:image"
            content="https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="poki-mu.vercel.app" />
          <meta
            property="twitter:title"
            content="Create pokemon messages and share"
          />
          <meta
            property="twitter:description"
            content="create short pokemon messages and share with the world"
          />
          <meta
            property="twitter:image"
            content="https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
