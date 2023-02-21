import { BarState } from '../../Context/Allcontext';
import cs from '../../styles/cart.module.css';
import Image from 'next/image';
import Link from 'next/link';

type props = {
  page: string;
};
const cartList = ({ page }: props) => {
  const {
    cartItems,
    deleteCartItem,
    increaseItemQuantity,
    decreaseItemQuantity
  } = BarState();

  const deleteFromCart = (n: number) => {
    deleteCartItem(n);
  };
  let shippingFee: number = 2.5;
  let totalPrice: number = 0;
  for (let t = 0; t < cartItems.length; t++) {
    totalPrice = totalPrice + cartItems[t].price;
  }

  return (
    <>
      {cartItems.length > 0 ? (
        <div>
          <section className={cs.cartItems}>
            {cartItems.map((item, i) => (
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
                        onClick={() => deleteFromCart(i)}
                      />
                    </div>
                  </div>

                  <div className={cs.clearamane}>{item.creator}</div>
                  <div className={cs.size}>
                    Size: <span>{item.size} ft</span>
                  </div>
                  <div className={cs.itemCount}>
                    <div className={cs.quantity}>
                      <span onClick={() => decreaseItemQuantity(i)}>- </span>{' '}
                      {item.quantity}{' '}
                      <span onClick={() => increaseItemQuantity(i)}> +</span>
                    </div>
                    <div className={cs.price}>
                      ${Math.round(item.price * 10) / 10}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <section className={cs.checkout}>
            {/* this div only shows on desktop */}
            {page == 'cart' ? (
              <div style={{ width: '35%' }} className={cs.proceedDesktop}>
                <Link
                  href={`/cart/shipping`}
                  style={{ textDecoration: 'none' }}
                >
                  <button>Proceed to checkout</button>
                </Link>
                <div className={cs.continue}>
                  <Link
                    href={`/market/products`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            ) : (
              ''
            )}

            <div className={cs.checkoutDetailsContainer}>
              <div className={cs.checkoutDetails}>
                <div>Products in cart :</div>{' '}
                <span>{cartItems.length} items</span>
              </div>
              <div className={cs.checkoutDetails}>
                <div>Shipping :</div>
                <span>${shippingFee}</span>
              </div>
              <div className={cs.checkoutDetails}>
                <div>Total :</div>
                <span>${Math.round((totalPrice + shippingFee) * 10) / 10}</span>
              </div>
            </div>
            {/* this div only shows on mobile */}
            {page == 'cart' ? (
              <div className={cs.proceedMobile}>
                <Link
                  href={`/cart/shipping`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={cs.btnHouse}>
                    <button className={cs.mobileBtn}>
                      Proceed to checkout
                    </button>
                  </div>
                </Link>
                <Link
                  href={`/market/products`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={cs.continue}>
                    <span>Continue Shopping</span>
                  </div>
                </Link>
              </div>
            ) : (
              ''
            )}
          </section>{' '}
        </div>
      ) : (
        <div className={cs.cartEmpty}>
          <img src="https://img.icons8.com/pastel-glyph/74/null/shopping-cart--v1.png" />
          <div>cart is empty</div>
        </div>
      )}
    </>
  );
};

export default cartList;
