import type { GetStaticProps } from 'next';

interface StaticPageProps {
  fact: string;
}

function StaticPage(props: StaticPageProps): JSX.Element {
  return (
    <>
      <h1>This will be a static page that will display the same cat fatc</h1>

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
  };
};

export default StaticPage;
