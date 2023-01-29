import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import cs from '../../styles/shipping.module.css';
import style from '../../styles/payment.module.css';
import Image from 'next/image';

const Payment = () => {
  return (
    <main>
      <NavBar page="market" />
      <Sidebar page="market" />

      <div className={cs.cartNav}>
        <div className={cs.cart}>
          <div className={cs.list}>Shopping cart</div>
        </div>
        <div className={cs.details}>
          <div className={cs.list}>Shipping details</div>
        </div>
        <div className={cs.payment}>
          <div className={cs.active}>Payment details</div>
        </div>
      </div>

      {/* this div is seen only on mobile view */}
      <div className={cs.currentLink}>
        Home/ Marketplace/ Cart/Shipping/<span>Payment</span>
      </div>

      <div className={style.methodFlex}>
        <span className={style.paymentMethod}>Payment method</span>
        <div className={style.secureFlex}>
          <Image src="/server.png" alt="secure server" width={18} height={20} />
          <span className={style.secure}>Secure server</span>
        </div>
      </div>

      <section className={style.formFlex}>
        <div>
          <div className={style.paymentForm}>
            <div className={style.radioDiv}>
              <div className={style.radioContainer}>
                <input type="radio" className={style.inputRadio} />
                <span>Select your wallet</span>
              </div>
              {/* these images only appear on desktop */}
              <div className={style.walletImgs}>
                <Image src="/meta.png" alt="meta" width={35} height={35} />
                <Image
                  src="/coinbase.png"
                  alt="coinbase"
                  width={35}
                  height={35}
                />
                <Image src="/connect.png" alt="meta" width={35} height={35} />
                <Image src="/phantom.png" alt="meta" width={35} height={35} />
              </div>
            </div>
            <div className={style.connect}>
              Connect with one of our available wallet providers or add and
              connect a new wallet.
            </div>

            {/* these image only appear on mobile */}
            <div className={style.walletImgsMobile}>
              <Image src="/meta.png" alt="meta" width={35} height={35} />
              <Image
                src="/coinbase.png"
                alt="coinbase"
                width={35}
                height={35}
              />
              <Image src="/connect.png" alt="meta" width={35} height={35} />
              <Image src="/phantom.png" alt="meta" width={35} height={35} />
            </div>

            <div className={style.formContainer}>
              <div className={style.inputContainer}>
                <label>Wallet type</label>
                <input type="text" />
              </div>

              <div className={style.inputContainer}>
                <label>key</label>
                <div className={style.key}>
                  <input type="text" placeholder="Please enter your key" />
                  <Image
                    src="/meta.png"
                    alt="meta"
                    width={35}
                    height={35}
                    className={style.keyImg}
                  />
                </div>
              </div>

              <div className={style.inputContainerFlex}>
                <div className={style.expiryDate}>
                  <label>Expiry date</label>
                  <input type="date" className={style.flexInput} />
                </div>
                <div className={style.cvv}>
                  <label>cvv</label>
                  <input type="text" />
                </div>
              </div>

              <div className={style.checkboxContainer}>
                <input type="checkbox" />
                <span>
                  Save my wallet details & information for future transactions
                </span>
              </div>
            </div>
          </div>
          <div className={style.confirmBtnContainer}>
            <button className={style.confirmBtn}>Confirm</button>
          </div>
        </div>

        <div className={style.summaryContainer}>
          <div className={style.summary}>Payment Summary</div>

          <div className={style.walletDetails}>
            <div className={style.metamask}>
              Metamask wallet : 002345KJi90pzzz3
            </div>
            <span>Actively linked to Yaba, Lagos Nigeria.</span>
          </div>

          <div className={style.expectedArrival}>
            <div style={{ width: '400px' }}>
              Expected arrival date: Between 22nd September and 26th September
              2022
            </div>
          </div>

          <section className={cs.checkout}>
            <div>
              <div className={cs.checkoutDetails}>
                <div>Products in cart :</div> <span>3 items</span>
              </div>
              <div className={cs.checkoutDetails}>
                <div>Shipping :</div>
                <span>$2.50</span>
              </div>
              <div className={cs.checkoutDetails}>
                <div>Total :</div>
                <span>$114.0</span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Payment;
