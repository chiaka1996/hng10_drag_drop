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
      <Image
        src={img}
        alt="product"
        width={240}
        height={280}
        className={css.productImg}
      />
      <div className={css.name}>{name}</div>
      <div className={css.price}>{price}</div>
    </div>
  );
};

export default Product;
