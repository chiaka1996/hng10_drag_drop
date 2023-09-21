import { useEffect, useState } from 'react';
import nav from '../.././styles/SideBar.module.css';
import Image from 'next/image';
import { BarState } from '../../Context/Allcontext';
import 'animate.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface prop {
  page: string;
}

const Sidebar = ({ page }: prop) => {
  const router = useRouter();
  const [checkedIn, setCheckedIn] = useState<string | null>(null);
  const { bar, closeBar } = BarState();

  const Logout = () => {
    localStorage.removeItem('galleryUser');
    closeBar();
    router.push('/login');
  };

  useEffect(() => {
    const check = localStorage.getItem('galleryUser');
    setCheckedIn(check);
  }, []);

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
          href={{
            pathname: '/gallery'
          }}
          style={{ textDecoration: 'none' }}
          onClick={closeBar}
        >
          <div
            className={page === 'market' ? nav.navLinksUnderline : nav.navLinks}
          >
            Gallery
          </div>
        </Link>

        {!checkedIn ? (
          <Link
            href="/login"
            style={{ textDecoration: 'none' }}
            onClick={closeBar}
          >
            <div
              className={
                page === 'login' ? nav.navLinksUnderline : nav.navLinks
              }
            >
              Login
            </div>
          </Link>
        ) : (
          <div className={nav.navLinks} onClick={Logout}>
            Log out
          </div>
        )}
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
