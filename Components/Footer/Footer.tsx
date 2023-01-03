import Image from 'next/image';
import css from './Footer.module.css';
const Footer = () => {
  return (
    <div>
      <div className={css.footerContainer}>
        <div className={css.heading}>ARTSY.</div>
        <div>
          <ul>
            <li>Home</li>
            <li>Marketplace</li>
            <li>Auctions</li>
            <li>Drops</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Blog</li>
            <li>Wallets</li>
            <li>Rates</li>
            <li>High bids</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={css.listFlex}>
              <Image
                src="/mail.png"
                alt="message"
                width={29}
                height={29}
                className="animate__animated animate__pulse animate__infinite"
              />
              <div>artsystudios@gmail.com</div>
            </li>
            <li className={css.listFlex}>
              <Image
                src="/location.png"
                alt="message"
                width={29}
                height={29}
                className="animate__animated animate__pulse animate__infinite"
              />
              <div>Lagos, Nigeria.</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.rights}>
        Artsystudios © 2022. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
