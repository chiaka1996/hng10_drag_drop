import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import cs from '../../styles/shipping.module.css';
import Image from 'next/image';
import { BarState } from '../../Context/Allcontext';
import Link from 'next/link';

interface customerDetails {
  email: string;
  fullName: string;
  wallet: string;
  country: string;
  city: string;
  postalCode: string;
  phone: string;
}

const ShippingDetails = () => {
  const { cartItems } = BarState();
  const [customerDetails, setCustomerDetails] = useState<customerDetails>({
    email: '',
    fullName: '',
    wallet: 'flutterwave',
    country: 'nigeria',
    city: 'lagos',
    postalCode: '',
    phone: ''
  });

  const onChangeCustomerDetails = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;

    setCustomerDetails({
      ...customerDetails,
      [name]: value
    });
  };

  let shippingFee: number = 2.5;
  let totalPrice: number = 0;
  for (let t = 0; t < cartItems.length; t++) {
    totalPrice = totalPrice + cartItems[t].price;
  }

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
            <input
              type="email"
              name="email"
              value={customerDetails.email}
              onChange={onChangeCustomerDetails}
            />
            <div className={cs.checkboxContainer}>
              <input type="checkbox" className={cs.checkbox} />
              <span>Get updates about new drops and exclusive offers</span>
            </div>
          </div>

          <div className={cs.inputContainer}>
            <label>Your full name</label>
            <input
              type="text"
              placeholder="Big cj"
              value={customerDetails.fullName}
              name="fullName"
              onChange={onChangeCustomerDetails}
            />
          </div>

          <div className={cs.inputContainer}>
            <label>Choose a wallet</label>
            <select
              name="wallet"
              onChange={onChangeCustomerDetails}
              value={customerDetails.wallet}
            >
              <option value="flutterwave">Flutterwave</option>
            </select>
          </div>

          <div className={cs.inputContainer}>
            <label>Country</label>
            <select
              name="country"
              onChange={onChangeCustomerDetails}
              value={customerDetails.country}
            >
              <option value="nigeria">Nigeria</option>
            </select>
          </div>

          <div className={cs.postalContainer}>
            <div>
              <label>City</label>
              <select
                name="city"
                onChange={onChangeCustomerDetails}
                value={customerDetails.city}
              >
                <option value="lagos">Lagos</option>
              </select>
            </div>

            <div>
              <label>Postal code</label>
              <input
                type="text"
                placeholder="0011011"
                name="postalCode"
                onChange={onChangeCustomerDetails}
                value={customerDetails.city}
              />
            </div>
          </div>

          <div className={cs.inputContainer}>
            <label>Phone number</label>
            <input type="text" placeholder="08012345698" />
          </div>
          <div className={cs.buttonContainer}>
            <Link href={`/cart/success`} style={{ textDecoration: 'none' }}>
              <button>Confirm</button>
            </Link>
          </div>

          {/* this div is to be viewed only on mobile */}
          <div className={cs.goBackToCart}>Go back to cart</div>
        </div>

        <div className={cs.gridItem2}>
          <>
            {cartItems.map((prod, i) => (
              <section className={cs.cartItems} key={i}>
                <div className={cs.item}>
                  <div>
                    <Image
                      src={prod.image}
                      alt="cart list"
                      width={150}
                      height={160}
                    />
                  </div>
                  <div className={cs.itemDetails}>
                    <div className={cs.itemHeader}>
                      <header>{prod.name}</header>
                      {/* <div className={cs.cancelContainer}>
                        <Image
                          src="/cartCancel.png"
                          alt="cancel item"
                          width={10}
                          height={10}
                        />
                      </div> */}
                    </div>

                    <div className={cs.clearamane}>{prod.creator}</div>
                    <div className={cs.size}>
                      Size: <span>200 ft</span>
                    </div>
                    <div className={cs.itemCount}>
                      <div className={cs.quantity}>Qty: {prod.quantity}</div>
                      <div className={cs.price}>${prod.price}</div>
                    </div>
                  </div>
                </div>
              </section>
            ))}

            <section className={cs.checkout}>
              <div>
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
                  <span>
                    ${Math.round((totalPrice + shippingFee) * 10) / 10}
                  </span>
                </div>
              </div>
            </section>
          </>
        </div>
      </section>
    </main>
  );
};

export default ShippingDetails;
