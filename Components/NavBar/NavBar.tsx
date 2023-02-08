import nav from './NavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { BarState } from '../../Context/Allcontext';

interface prop {
  page: string;
}

const NavBar = ({ page }: prop) => {
  const { bar, openBar } = BarState();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="ARTSY" content="Phoyography, history," />
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
        <div className={nav.navLogo}>ARTSY.</div>
        <div className={nav.linkContainer}>
          <Link
            href="/"
            className={page === 'home' ? nav.navLinksUnderline : nav.navLinks}
          >
            <div>Home</div>
          </Link>
          <Link
            href={{
              pathname: '/market/products',
              query: {
                category: ['Nature']
              }
            }}
            className={page === 'market' ? nav.navLinksUnderline : nav.navLinks}
          >
            <div>Marketplace</div>
          </Link>
          <Link
            href="/auction/auction"
            className={
              page === 'auction' ? nav.navLinksUnderline : nav.navLinks
            }
          >
            <div>Auctions</div>
          </Link>
          <Link
            href="/auction/drop"
            className={page === 'drop' ? nav.navLinksUnderline : nav.navLinks}
          >
            <div>Drop</div>
          </Link>
        </div>
        <div className={nav.iconContainer}>
          <div>
            <Image src="/search.png" alt="search bar" width={18} height={18} />
          </div>
          <div className={nav.cartImg}>
            <Image src="/cart.png" alt="search bar" width={18} height={18} />
          </div>
          <div className={nav.notificationImg}>
            <Image
              src="/notification.png"
              alt="Notification bar"
              width={18}
              height={18}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
