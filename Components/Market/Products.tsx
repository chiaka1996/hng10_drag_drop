import css from './Products.module.css';
import Image from 'next/image';

interface prop {
  img: string;
  name: string;
  price: string;
}
const Product = ({ img, name, price }: prop) => {
  return (
    <div className={css.products}>
      <div className={css.imgContainer}>
        <Image src={img} alt="product" fill className={css.productImg} />
      </div>
      <div className={css.mobileFlex}>
        <div className={css.name}>{name}</div>
        <div className={css.price}>{price}</div>
      </div>
    </div>
  );
};

export default Product;
