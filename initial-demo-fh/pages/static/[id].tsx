import type { GetStaticPaths, GetStaticProps } from 'next';

interface StaticPageByIdProps {
  fact: string;
}

function StaticPageById(props: StaticPageByIdProps): JSX.Element {
  return (
    <>
      <h1>
        This will be a static page that will display the same cat fatc{' '}
        <strong>by ID</strong>
      </h1>

      <h2>{props.fact}</h2>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { id: '591f98803b90f7150a19c229' } },
      { params: { id: '6265dbd1327911238678b4a3' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (typeof context.params?.['id'] !== 'string') throw new Error('Invalid ID');

  const response = await fetch(
    `${process.env['API_URL'] ?? ''}/facts/${context.params['id']}`,
  );

  if (!response.ok) throw new Error('Failed to fetch fact');

  const fact = await (response.json() as Promise<{ text: string }>);

  return {
    props: { fact: fact.text },
  };
};

export default StaticPageById;
