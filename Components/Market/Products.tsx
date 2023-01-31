import css from './Products.module.css';
import Image from 'next/image';

interface prop {
  id: number;
  img: string;
  name: string;
  price: number;
}
const Product = ({ img, name, price, id }: prop) => {
  return (
    <div className={css.products}>
      <div className={css.imgContainer}>
        <Image src={img} alt="product" fill className={css.productImg} />
      </div>
      <div className={css.mobileFlex}>
        <div className={css.name}>{name}</div>
        <div className={css.price}>${price}</div>
      </div>
    </div>
  );
};

export default Product;
