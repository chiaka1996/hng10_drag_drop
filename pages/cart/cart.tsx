import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import cs from '../../styles/cart.module.css';
import Image from 'next/image';
import { BarState } from '../../Context/Allcontext';

const Cart = () => {
  const { items } = BarState();

  return (
    <main>
      <NavBar page="market" />
      <Sidebar page="market" />

      <div className={cs.cartNav}>
        <div className={cs.cart}>
          <div className={cs.active}>Shopping cart</div>
        </div>
        <div className={cs.details}>
          <div className={cs.list}>Shipping details</div>
        </div>
        <div className={cs.payment}>
          <div className={cs.list}>Payment details</div>
        </div>
      </div>

      {/* this div is seen only on mobile view */}
      <div className={cs.currentLink}>
        Home/ Marketplace/ <span>Cart</span>
      </div>

      <section className={cs.cartItems}>
        {items.map((item, i) => (
          <div className={cs.item} key={i}>
            <div className={cs.cartImgContainer}>
              <Image src={item.image} alt="cart list" fill />
            </div>
            <div className={cs.itemDetails}>
              <div className={cs.itemHeader}>
                <header>{item.name}</header>
                <div className={cs.cancelContainer}>
                  <Image
                    src="/cartCancel.png"
                    alt="cancel item"
                    width={12}
                    height={12}
                    // fill
                  />
                </div>
              </div>

              <div className={cs.clearamane}>{item.creator}</div>
              <div className={cs.size}>
                Size: <span>{item.size} ft</span>
              </div>
              <div className={cs.itemCount}>
                <div className={cs.quantity}>
                  <span>- </span> {item.quantity} <span> +</span>
                </div>
                <div className={cs.price}>${item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className={cs.checkout}>
        {/* this div only shows on desktop */}
        <div style={{ width: '35%' }} className={cs.proceedDesktop}>
          <button>Proceed to checkout</button>
          <div className={cs.continue}>
            <span>Continue Shopping</span>
          </div>
        </div>
        <div className={cs.checkoutDetailsContainer}>
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
        {/* this div only shows on mobile */}
        <div className={cs.proceedMobile}>
          <div className={cs.btnHouse}>
            <button className={cs.mobileBtn}>Proceed to checkout</button>
          </div>
          <div className={cs.continue}>
            <span>Continue Shopping</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
