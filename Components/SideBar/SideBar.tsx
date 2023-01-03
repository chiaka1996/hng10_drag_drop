import css from './Sidebar.module.css';
import Image from 'next/image';
import { BarState } from '../../Context/Allcontext';
import 'animate.css';

const Sidebar = () => {
  const { bar, closeBar } = BarState();
  return (
    <div className={bar ? css.sideContainer : css.sideContainer_false}>
      <div className={css.logoContainer}>
        <div className={css.navLogo}>ARTSY.</div>
        <div className={css.cancelContainer}>
          <Image
            src="/cancel.png"
            alt="cancel"
            width={20}
            height={18}
            onClick={closeBar}
          />
        </div>
      </div>
      <div className={css.linkContainer}>
        <div className={css.navLinks}>Home</div>
        <div className={css.navLinks}>Marketplace</div>
        <div className={css.navLinks}>Auctions</div>
        <div className={css.navLinks}>Drop</div>
      </div>

      <div
        className={`${css.msgContainer} animate__animated animate__pulse animate__infinite`}
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
