import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-blue-950 min-w-[100vw] min-h-[100vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
