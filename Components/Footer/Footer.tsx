import Image from 'next/image';
import css from './Footer.module.css';
const Footer = () => {
  return (
    <div>
      <div className={css.newsletter}>
        <div>
          <div className={css.letterHeader}>NEWSLETTER</div>
          <div className={css.subscribe}>
            Subscribe to get daily updates on new drops & exciting deals
          </div>
          <div className={css.formContainer}>
            <input type="text" placeholder="ENTER YOUR EMAIL" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className={css.footerContainer}>
        <div className={css.heading}>ARTSY.</div>
        <div className={css.desktop}>
          <ul>
            <li>Home</li>
            <li>Marketplace</li>
            <li>Auctions</li>
            <li>Drops</li>
          </ul>
        </div>
        <div className={css.desktop}>
          <ul>
            <li>Blog</li>
            <li>Wallets</li>
            <li>Rates</li>
            <li>High bids</li>
          </ul>
        </div>
        <div className={css.mobileAddress}>
          <div className={css.reachUs}>Reach us</div>
          <ul>
            <li className={css.listFlex}>
              <section className={css.addressImg}>
                <Image
                  src="/mail.png"
                  alt="message"
                  fill
                  className="animate__animated animate__pulse animate__infinite"
                />
              </section>
              <div>artsystudios@gmail.com</div>
            </li>
            <li className={css.listFlex}>
              <section className={css.addressImg}>
                <Image
                  src="/location.png"
                  alt="message"
                  fill
                  className="animate__animated animate__pulse animate__infinite"
                />
              </section>
              <div>Lagos, Nigeria.</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.rights}>
        Artsy studios © 2022. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
