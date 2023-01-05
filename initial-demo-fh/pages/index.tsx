import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Navbar from '@/components/Navbar';

function IndexPage(props: unknown): JSX.Element {
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
          Go to <Link href="/about">About</Link>
        </h1>

        <pre>{JSON.stringify(props, null, 2)}</pre>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return await Promise.resolve({
    props: {
      apiUrl: process.env['API_URL'] ?? '',
    },
  });
};

export default IndexPage;
