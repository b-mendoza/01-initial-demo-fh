import type { GetStaticProps } from 'next';

import Navbar from '@/components/Navbar';

interface StaticPageProps {
  fact: string;
}

function StaticPage(props: StaticPageProps): JSX.Element {
  return (
    <>
      <Navbar />

      <h1>
        This is a static page that will be updated every 20 seconds with a new
        cat fatc
      </h1>

      <h2>{props.fact}</h2>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env['API_URL'] ?? ''}/facts/random`);

  if (!response.ok) throw new Error('Failed to fetch random fact');

  const fact = await (response.json() as Promise<{ text: string }>);

  return {
    props: { fact: fact.text },
    revalidate: 20,
  };
};

export default StaticPage;
