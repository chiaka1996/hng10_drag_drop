import React, { useState, useEffect, useRef } from 'react';
import css from './Products.module.css';
import Image from 'next/image';

// interface prop {
//   id: number;
//   img: string;
//   name: string;
//   tag: string;
// }

const GalleryComponent = ({ img, name, id, tag }) => {
  return (
    <div className={css.products}>
      <div className={css.imgContainer}>
        <Image src={img} alt="product" fill className={css.productImg} />
      </div>
      <div className={css.mobileFlex}>
        <div className={css.name}>{name}</div>
        <div className={css.tag}>{tag}</div>
      </div>
    </div>
  );
};

export default GalleryComponent;
