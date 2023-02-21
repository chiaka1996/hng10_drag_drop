import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import cs from '../../styles/cart.module.css';
import CartProduct from '../../Components/Cart';

const Cart = () => {
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
      {/*  */}
      <CartProduct page="cart" />
    </main>
  );
};

export default Cart;
