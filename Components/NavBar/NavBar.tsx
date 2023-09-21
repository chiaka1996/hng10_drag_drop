import nav from './NavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { BarState } from '../../Context/Allcontext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface prop {
  page: string;
}

interface query {
  category: string[];
  price: string | string[];
  artist: string[];
  search: string | string[];
}

const NavBar = ({ page }: prop) => {
  const router = useRouter();
  const { bar, openBar } = BarState();
  const [checkedIn, setCheckedIn] = useState<string | null>(null);

  const Logout = () => {
    localStorage.removeItem('galleryUser');
    router.push('/login');
  };

  useEffect(() => {
    const check = localStorage.getItem('galleryUser');
    setCheckedIn(check);
  }, []);

  return (
    <div>
      <Head>
        <title>CHIAKA WEBSITE</title>
        <meta name="CHIAKA" content="Photography, history," />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={nav.navContainer}>
        <div className={nav.hamburger}>
          <Image
            src="/hamburger.png"
            alt="hamburger"
            width={19}
            height={14}
            onClick={openBar}
          />
        </div>
        <div className={nav.navLogo}>CHIAKA.</div>
        <div className={nav.linkContainer}>
          <Link
            href="/"
            className={page === 'home' ? nav.navLinksUnderline : nav.navLinks}
          >
            <div>Home</div>
          </Link>
          <Link
            href="/gallery"
            className={
              page === 'gallery' ? nav.navLinksUnderline : nav.navLinks
            }
          >
            <div>Gallery</div>
          </Link>

          {!checkedIn ? (
            <Link
              href="/login"
              className={
                page === 'login' ? nav.navLinksUnderline : nav.navLinks
              }
            >
              <div>Login</div>
            </Link>
          ) : (
            <div className={nav.navLinks} onClick={Logout}>
              Log out
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
