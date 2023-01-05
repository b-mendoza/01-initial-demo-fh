import Head from 'next/head';
import Link from 'next/link';

function AboutPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>About | Bryan Mendoza</title>
        <meta name="description" content="About Page" />
      </Head>

      <main>
        <h1>
          Ir a <Link href="/">Home</Link>
        </h1>
      </main>
    </>
  );
}

export default AboutPage;
