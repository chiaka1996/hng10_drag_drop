import React, { useState, useEffect } from 'react';
import NavBar from '../../../Components/NavBar/NavBar';
import Sidebar from '../../../Components/SideBar/SideBar';
import css from '../../../styles/market.module.css';
import Image from 'next/image';
import Product from '../../../Components/Market/Products';
import Footer from '../../../Components/Footer/Footer';
import { BarState } from '../../../Context/Allcontext';
import Link from 'next/link';
import { useRouter } from 'next/router';

type product = {
  id: number;
  name: string;
  price: number;
  creator: string;
  image: string;
  country: string;
  views: number;
  category: string;
};

const Market = () => {
  const {
    filtered,
    addCategory,
    addPrice,
    addSearch,
    addArtist,
    cat,
    pri,
    sear,
    art,
    products
  } = BarState();

  const router = useRouter();
  const categoryList: string[] = [
    'Editorial',
    'Fashion',
    'Optics',
    'Art and Museum',
    'Nature'
  ];

  const ArtistList: string[] = ['Ali Darwa', 'Clemz', 'Big cj', 'Osuji Art'];
  const maxPrice: number = Math.round(Math.max(...products.map(x => x.price)));

  const [seemore, setSeemore] = useState<number>(9);
  const [showCategory, setShowCategory] = useState<boolean>(true);
  const [showArtist, setShowArtist] = useState<boolean>(true);
  const [showPrice, setShowPrice] = useState<boolean>(true);
  const [range, setRange] = useState<number>(maxPrice);

  useEffect(() => {
    if (!router.isReady) return;
    const { category, price, search, artist } = router.query;

    if (category && typeof category != 'string') {
      addCategory(category);
    } else if (typeof category == 'string') {
      addCategory([category]);
    } else {
      addCategory([]);
    }

    if (artist && typeof artist != 'string') {
      addArtist(artist);
    } else if (typeof artist == 'string') {
      addArtist([artist]);
    } else {
      addArtist([]);
    }

    !Array.isArray(price) && price ? addPrice(parseInt(price)) : '';
    !Array.isArray(search) && search ? addSearch(search) : '';
  }, [
    router.isReady,
    router.query,
    router.query.category,
    router.query.price,
    router.query.search,
    router.query.artist
  ]);

  const showCat = () => {
    setShowCategory(x => !x);
  };

  const toggleArtist = () => {
    setShowArtist(x => !x);
  };

  const togglePriceArrow = () => {
    setShowPrice(x => !x);
  };

  const showMore = () => {
    if (seemore == 9) {
      setSeemore(filtered.length);
    } else if (seemore === filtered.length) {
      setSeemore(9);
    }
  };

  // category function////////////////////////////
  const categoryStatus = (e: any) => {
    const check = e.target.checked;
    const value = e.target.value;
    if (check) {
      cat.includes(value)
        ? ''
        : router.push({
            pathname: '/market/products',
            query: {
              category: [...cat, value],
              price: pri && !Array.isArray(pri) ? pri : [],
              artist: art,
              search: sear && !Array.isArray(sear) ? sear : []
            }
          });
    } else {
      cat.splice(cat.indexOf(value), 1);
      router.push({
        pathname: '/market/products',
        query: {
          category: cat,
          price: pri && !Array.isArray(pri) ? pri : [],
          artist: art,
          search: sear && !Array.isArray(sear) ? sear : []
        }
      });
    }
  };

  // /////////////artist function/////////////
  const artistStatus = (e: any) => {
    const check = e.target.checked;
    const value = e.target.value;
    if (check) {
      art.includes(value)
        ? ''
        : router.push({
            pathname: '/market/products',
            query: {
              category: cat,
              price: pri && !Array.isArray(pri) ? pri : [],
              artist: [...art, value],
              search: sear && !Array.isArray(sear) ? sear : []
            }
          });
    } else {
      art.splice(art.indexOf(value), 1);

      router.push({
        pathname: '/market/products',
        query: {
          category: cat,
          price: pri && !Array.isArray(pri) ? pri : [],
          artist: art,
          search: sear && !Array.isArray(sear) ? sear : []
        }
      });
    }
  };

  // search function/////////
  const querySearch = (e: any) => {
    const value: string = e.target.value;
    addSearch(value);
  };

  const changeRange = (e: any) => {
    const value = e.target.value;
    value ? setRange(value) : setRange(0);
  };

  //price function///////
  const changePrice = (e: any) => {
    const value = e.target.value;

    if (e.key == 'Enter') {
      value ? addPrice(parseInt(value)) : addPrice(0);
    }
  };

  return (
    <div className={css.marketBody}>
      <NavBar page="market" />
      <Sidebar page="market" />
      <div className={css.productLinkMarket}>
        Home/ Marketplace/ <span style={{ color: 'black' }}>Products</span>
      </div>

      <div className={css.searchContainer}>
        <div className={css.filtersContainer}>
          <div className={css.inputContainer}>
            <input
              type="text"
              value={sear && !Array.isArray(sear) ? sear : ''}
              placeholder="Search"
              className={css.search}
              onChange={querySearch}
            />
          </div>

          <div className={css.filter}>
            <Image
              src="/filter.png"
              className={css.filterImg}
              alt="filter"
              width={35}
              height={39}
            />
            <div className={css.filterText}>Filter</div>
          </div>

          <div className={css.byCategory} onClick={showCat}>
            <div className={css.categoryText}>By category</div>
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
            {categoryList.map((item, i) => (
              <div className={css.checkContainer} key={i}>
                {cat.includes(item) ? (
                  <input
                    id={item}
                    type="checkbox"
                    className={css.check}
                    value={item}
                    onChange={categoryStatus}
                    checked
                  />
                ) : (
                  <input
                    id={item}
                    type="checkbox"
                    className={css.check}
                    value={item}
                    onChange={categoryStatus}
                  />
                )}

                <label className={css.checkLabel} htmlFor={item}>
                  {item}
                </label>
              </div>
            ))}
          </div>

          <div className={css.byCategory}>
            <div className={css.categoryText}>By price</div>
            <div className={css.arrowContainer} onClick={togglePriceArrow}>
              <Image
                src="/categoryArrow.png"
                alt="arrow up"
                fill
                className={
                  showPrice ? css.categoryImage : css.downCategoryArrow
                }
              />
            </div>
          </div>
          <div className={showPrice ? css.checkboxes : css.closeCheckboxes}>
            <input
              className={css.rangeType}
              type="range"
              min="0"
              max={maxPrice}
              value={range}
            />

            <div className={css.priceValContainer}>
              <div className={css.minContainer}>
                <label htmlFor="min">min</label>
                <br />
                <input
                  id="min"
                  type="number"
                  value="0"
                  max={0}
                  className={css.minPrice}
                />
              </div>{' '}
              <div className={css.slash}>-</div>
              <div className={css.maxContainer}>
                <label htmlFor="max">max</label>
                <br />
                <input
                  id="max"
                  type="number"
                  value={range}
                  max={maxPrice}
                  className={css.maxPrice}
                  onChange={changeRange}
                  onKeyDown={changePrice}
                />
              </div>
            </div>
          </div>

          <div className={css.byCategory} onClick={toggleArtist}>
            <div className={css.categoryText}>By Artist</div>
            <div className={css.arrowContainer}>
              <Image
                src="/categoryArrow.png"
                alt="arrow up"
                fill
                className={
                  showArtist ? css.categoryImage : css.downCategoryArrow
                }
              />
            </div>
          </div>

          <div className={showArtist ? css.checkboxes : css.closeCheckboxes}>
            {ArtistList.map((item, i) => (
              <div className={css.checkContainer} key={i}>
                {art.includes(item) ? (
                  <input
                    id={item}
                    type="checkbox"
                    className={css.check}
                    value={item}
                    onChange={artistStatus}
                    checked
                  />
                ) : (
                  <input
                    id={item}
                    type="checkbox"
                    className={css.check}
                    value={item}
                    onChange={artistStatus}
                  />
                )}

                <label className={css.checkLabel} htmlFor={item}>
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className={css.productsContainer}>
          <div className={css.results}>
            <span>
              See 1-{filtered.length >= 10 ? seemore : filtered.length} 0f{' '}
              {filtered.length} results
            </span>
            <button>
              Sort by
              <Image
                src="/down_arrow.png"
                alt="down arrow"
                width={16}
                height={9}
                style={{ margin: '0 0 0 10%' }}
              />
            </button>
          </div>

          <div className={css.resultMobile}>
            <div className={css.seeResult}>Showing 1-5 of 18 results</div>
            <div className={css.resultFlex}>
              <div className={css.textContainer}>
                <span>Filters</span>
                <Image
                  src="/down_arrow.png"
                  alt="down arrow"
                  width={12}
                  height={9}
                  className={css.mobileArrow}
                />
              </div>
              <div className={css.textContainer}>
                <span>Sort by</span>
                <Image
                  src="/down_arrow.png"
                  alt="down arrow"
                  width={12}
                  height={9}
                  className={css.mobileArrow}
                />
              </div>
            </div>
          </div>

          <div className={css.prods}>
            {filtered.map((prod, i) =>
              i < seemore ? (
                <Link
                  href={`/market/${prod.id}`}
                  key={i}
                  style={{ textDecoration: 'none' }}
                >
                  <Product
                    img={prod.image}
                    name={prod.name}
                    price={prod.price}
                    id={prod.id}
                  />
                </Link>
              ) : (
                ''
              )
            )}
          </div>
          {filtered.length > 9 ? (
            <div className={css.btnContainer}>
              <button onClick={showMore}>
                {seemore != filtered.length ? 'See more' : 'see less'}
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Market;
