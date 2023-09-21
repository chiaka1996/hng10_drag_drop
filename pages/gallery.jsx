import React, { useState, useEffect, useRef } from 'react';
import { ReactSortable, Sortable, MultiDrag } from 'react-sortablejs';
import NavBar from '../Components/NavBar/NavBar';
import Sidebar from '../Components/SideBar/SideBar';
import css from '../styles/market.module.css';
import Image from 'next/image';
import Product from '../Components/Market/Products';
import Footer from '../Components/Footer/Footer';
import { BarState } from '../Context/Allcontext';
import Link from 'next/link';
import { useRouter } from 'next/router';

// type galleryImg = {
//   id: number;
//   name: string;
//   image: string;
//   tag: string;
// };

const Gallery = () => {
  const router = useRouter();
  const tagList = [
    'Editorial',
    'Fashion',
    'Optics',
    'Art and Museum',
    'Nature'
  ];
  const [tagsToFilter, setTagsToFilter] = useState([]);
  const [showCategory, setShowCategory] = useState(true);
  const [filterGallery, setFilterGallery] = useState([]);
  const [mapThroughGallery, setMapThroughGallery] = useState([]);
  const [check, setCheck] = useState(false);

  const gallery = [
    {
      id: 1,
      name: 'PHILOMENA `22',
      image: '/Rectangle1.png',
      tag: 'Art and Museum'
    },
    {
      id: 2,
      name: 'Boolean Egyptian',
      image: '/Rectangle2.png',
      tag: 'Editorial'
    },
    {
      id: 3,
      name: 'Blanc',
      image: '/Rectangle3.png',
      tag: 'Fashion'
    },
    {
      id: 4,
      name: 'ELLIPSIA',
      image: '/Rectangle4.png',
      tag: 'Optics'
    },
    {
      id: 5,
      name: 'Lawmakers',
      image: '/Rectangle5.png',
      tag: 'Art and Museum'
    },
    {
      id: 6,
      name: 'Veil',
      image: '/Rectangle6.png',
      tag: 'Fashion'
    },
    {
      id: 7,
      name: 'Alternating',
      image: '/Rectangle7.png',
      tag: 'Optics'
    },
    {
      id: 8,
      name: 'Rosemary `22',
      image: '/Rectangle8.png',
      tag: 'Fashion'
    },
    {
      id: 9,
      name: 'Beverly',
      image: '/Rectangle9.png',
      tag: 'Nature'
    },
    {
      id: 10,
      name: 'Sassy',
      image: '/explore1.png',
      tag: 'Editorial'
    },
    {
      id: 11,
      name: 'Blonde Beauty',
      image: '/explore2.png',
      tag: 'Art and Museum'
    },
    {
      id: 12,
      name: 'Pyramid 1997',
      image: '/pyramid.png',
      tag: 'Art and Museum'
    },
    {
      id: 13,
      name: 'Are We There Yet',
      image: '/mummies.png',
      tag: 'Editorial'
    }
  ];

  const showCat = () => {
    setShowCategory(x => !x);
  };

  const checkIfUserIsLoggedIn = () => {
    const checkedIn = localStorage.getItem('galleryUser');
    if (!checkedIn) {
      router.push('/login');
    }
  };

  const searchFunction = e => {
    let value = e.target.value;
    let searchMap = [];

    if (e.key === 'Enter') {
      gallery.map((item, i) => {
        if (item.tag.toLowerCase().includes(value.toLowerCase())) {
          searchMap.push(item);
        }
      });

      setFilterGallery([...searchMap]);
    }
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
    setFilterGallery([...gallery]);
  }, []);

  return (
    <div className={css.marketBody}>
      <NavBar page="gallery" />
      <Sidebar page="gallery" />

      <div className={css.searchContainer}>
        <div className={css.filtersContainer}>
          <div className={css.byCategory} onClick={showCat}>
            <div className={css.categoryText}>Tags</div>
            <div className={css.arrowContainer}>
              <Image
                src="/categoryArrow.png"
                alt="arrow up"
                fill
                className={
                  showCategory ? css.categoryImage : css.downCategoryArrow
                }
              />
            </div>
          </div>

          <div className={showCategory ? css.checkboxes : css.closeCheckboxes}>
            {tagList.map((item, i) => (
              <div className={css.checkContainer} key={i}>
                <div className={css.checkLabel} htmlFor={item}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={css.productsContainer}>
          <div className={css.inputSearch}>
            <input
              type="text"
              placeholder="Search by Tags"
              onKeyUp={searchFunction}
            />
          </div>

          <div className={css.prods}>
            {filterGallery.map((prod, i) => (
              <div key={i}>
                <Product
                  img={prod.image}
                  name={prod.name}
                  id={prod.id}
                  tag={prod.tag}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
