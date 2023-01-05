import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Navbar from '@/components/Navbar';

interface IndexPageProps {
  fact: string;
}

function IndexPage(props: IndexPageProps): JSX.Element {
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

        <h1>
          This is a server-side rendered page that will display a random cat
          fatc
        </h1>

        <h2>{props.fact}</h2>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env['API_URL'] ?? ''}/facts/random`);

  if (!response.ok) throw new Error('Failed to fetch random fact');

  const fact = await (response.json() as Promise<{ text: string }>);

  return {
    props: { fact: fact.text },
  };
};

export default IndexPage;
