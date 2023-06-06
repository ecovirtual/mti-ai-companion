import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="h-full bg-gray-900 scroll-smooth">
      <Head />
      <body className="h-full m-0 p-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
