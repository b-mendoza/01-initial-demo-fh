import Head from 'next/head';
import Link from 'next/link';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

const Nav = (): JSX.Element => (
  <nav>
    <ul>
      {routes.map((route) => (
        <li key={route.path}>
          <Link href={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

function IndexPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Bryan Mendoza</title>
        <meta name="description" content="Home Page" />
      </Head>

      <header>
        <Nav />
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
