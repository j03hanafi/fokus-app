import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-900 text-white">
        <Main />
        <NextScript />
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </body>
    </Html>
  );
}
