import nav from '.././SideBar.module.css';
import Image from 'next/image';
import { BarState } from '../../Context/Allcontext';
import 'animate.css';
import Link from 'next/link';

interface prop {
  page: string;
}

const Sidebar = ({ page }: prop) => {
  const { bar, closeBar } = BarState();
  return (
    <div className={bar ? nav.sideContainer : nav.sideContainer_false}>
      <div className={nav.logoContainer}>
        <div className={nav.navLogo}>ARTSY.</div>
        <div className={nav.cancelContainer}>
          <Image
            src="/cancel.png"
            alt="cancel"
            width={20}
            height={18}
            onClick={closeBar}
          />
        </div>
      </div>
      <div className={nav.linkContainer}>
        <Link href="/" style={{ textDecoration: 'none' }} onClick={closeBar}>
          <div
            className={page === 'home' ? nav.navLinksUnderline : nav.navLinks}
          >
            Home
          </div>
        </Link>

        <Link
          href="/market/market"
          style={{ textDecoration: 'none' }}
          onClick={closeBar}
        >
          <div
            className={page === 'market' ? nav.navLinksUnderline : nav.navLinks}
          >
            Marketplace
          </div>
        </Link>

        <Link
          href="/auction/auction"
          style={{ textDecoration: 'none' }}
          onClick={closeBar}
        >
          <div
            className={
              page === 'auction' ? nav.navLinksUnderline : nav.navLinks
            }
          >
            Auctions
          </div>
        </Link>

        <Link
          href="/auction/drop"
          style={{ textDecoration: 'none' }}
          onClick={closeBar}
        >
          <div
            className={page === 'drop' ? nav.navLinksUnderline : nav.navLinks}
          >
            Drop
          </div>
        </Link>
      </div>

      <div
        className={`${nav.msgContainer} animate__animated animate__pulse animate__infinite`}
      >
        <Image
          src="/message.png"
          alt="message"
          width={29}
          height={29}
          className="animate__animated animate__pulse animate__infinite"
        />
      </div>
    </div>
  );
};

export default Sidebar;
