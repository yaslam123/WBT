// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Favicon  */}
                <link rel="icon" type="image/png" href="/favicon-32x32.png" />
                {/* Fonts  */}
                <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700;800&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
