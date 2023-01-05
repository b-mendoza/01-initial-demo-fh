import Link from 'next/link';

import * as styles from './navbar.css';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = (): JSX.Element => (
  <nav>
    <ul>
      {routes.map((route) => (
        <li className={styles.listItem} key={route.path}>
          <Link href={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
