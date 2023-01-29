import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import cs from '../../styles/shipping.module.css';
import Image from 'next/image';

const ShippingDetails = () => {
  return (
    <main>
      <NavBar page="market" />
      <Sidebar page="market" />

      <div className={cs.cartNav}>
        <div className={cs.cart}>
          <div className={cs.list}>Shopping cart</div>
        </div>
        <div className={cs.details}>
          <div className={cs.active}>Shipping details</div>
        </div>
        <div className={cs.payment}>
          <div className={cs.list}>Payment details</div>
        </div>
      </div>

      {/* this div is seen only on mobile view */}
      <div className={cs.currentLink}>
        Home/ Marketplace/ Cart/ <span>Shipping</span>
      </div>

      <section className={cs.shippingContainer}>
        <div className={cs.gridItem1}>
          <div className={cs.inputContainer}>
            <label>Your email</label>
            <input type="email" />
            <div className={cs.checkboxContainer}>
              <input type="checkbox" className={cs.checkbox} />
              <span>Get updates about new drops and exclusive offers</span>
            </div>
          </div>

          <div className={cs.inputContainer}>
            <label>Your full name</label>
            <input type="text" placeholder="Big cj" />
          </div>

          <div className={cs.inputContainer}>
            <label>Choose a wallet</label>
            <select name="wallet">
              <option value="flutterwave">Flutterwave</option>
              <option value="interswitch">Interswitch</option>
            </select>
          </div>

          <div className={cs.inputContainer}>
            <label>Country</label>
            <select name="country">
              <option value="nigeria">Nigeria</option>
            </select>
          </div>

          <div className={cs.postalContainer}>
            <div>
              <label>City</label>
              <select name="city">
                <option value="lagos">Lagos</option>
              </select>
            </div>

            <div>
              <label>Postal code</label>
              <input type="text" placeholder="0011" />
            </div>
          </div>

          <div className={cs.inputContainer}>
            <label>Phone number</label>
            <input type="text" placeholder="08012345698" />
          </div>
          <div className={cs.buttonContainer}>
            <button>Proceed to payment</button>
          </div>

          {/* this div is to be viewed only on mobile */}
          <div className={cs.goBackToCart}>Go back to cart</div>
        </div>

        <div className={cs.gridItem2}>
          <section className={cs.cartItems}>
            <div className={cs.item}>
              <div>
                <Image
                  src="/Rectangle1.png"
                  alt="cart list"
                  width={150}
                  height={160}
                />
              </div>
              <div className={cs.itemDetails}>
                <div className={cs.itemHeader}>
                  <header>Philomena ‘22</header>
                  <div className={cs.cancelContainer}>
                    <Image
                      src="/cartCancel.png"
                      alt="cancel item"
                      width={10}
                      height={10}
                    />
                  </div>
                </div>

                <div className={cs.clearamane}>Clearamane</div>
                <div className={cs.size}>
                  Size: <span>200 ft</span>
                </div>
                <div className={cs.itemCount}>
                  <div className={cs.quantity}>
                    <span>- </span> 1 <span> +</span>
                  </div>
                  <div className={cs.price}>$35.50</div>
                </div>
              </div>
            </div>
          </section>

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

export default ShippingDetails;
