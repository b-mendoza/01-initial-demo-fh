import Head from 'next/head';
import Link from 'next/link';

import Navbar from '@/components/Navbar';

function IndexPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Bryan Mendoza</title>
        <meta name="description" content="Home Page" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <h1>
          Ir a <Link href="/about">About</Link>
        </h1>
      </main>
    </>
  );
}

export default IndexPage;
