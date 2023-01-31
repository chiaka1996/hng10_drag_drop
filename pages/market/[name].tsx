/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import css from '../../styles/market.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BarState } from '../../Context/Allcontext';
import Link from 'next/link';

const Product = () => {
  const { products } = BarState();
  const router = useRouter();
  // const num = router.query.name;
  const [item, setItem] = useState({
    id: 0,
    name: '',
    price: 0,
    creator: '',
    image: '',
    country: '',
    views: 0
  });

  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState<boolean>(false);
  const [listing, setListing] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);
  const [num, setNum] = useState<string | undefined | string[]>('0');

  const changeDescription = () => {
    setDescription(desc => !desc);
    setListing(false);
    setStatus(false);
  };

  const changeListing = () => {
    setListing(lis => !lis);
    setDescription(false);
    setStatus(false);
  };

  const changeStatus = () => {
    setStatus(stat => !stat);
    setDescription(false);
    setListing(false);
  };

  const increaseQuantity = () => {
    setQuantity(qty => qty + 1);
  };

  const decreaseQuantity = () => {
    quantity == 1 ? setQuantity(qty => 1) : setQuantity(qty => qty - 1);
  };

  useEffect(() => {
    if (!router.isReady) return;
    setNum(router.query.name);
    products.map((prod, i) =>
      prod.id.toString() == num
        ? setItem({
            id: prod.id,
            name: prod.name,
            price: prod.price,
            creator: prod.creator,
            image: prod.image,
            country: prod.country,
            views: prod.views
          })
        : ''
    );
  }, [router.isReady, num]);

  return (
    <div>
      <NavBar page="market" />
      <Sidebar page="market" />
      <div className={css.itemContainer}>
        <div className={css.productLink}>
          Home/ Marketplace/ Editorials/{' '}
          <span style={{ color: 'black' }}>{item.name}</span>
        </div>

        <div className={css.itemBreakdown}>
          <div className={css.rectangleImgContainer}>
            <Image
              src={item.image}
              className={css.descriptionImg}
              fill
              alt="item"
            />
          </div>

          <div className={css.itemDescription}>
            <div className={css.itemHeader}>
              <div className={css.headerName}>{item.name}</div>
              <div className={css.headerPrice}>
                <span>${item.price}</span>
              </div>
            </div>
            <div className={css.creatorDiv}>
              Creator : <span>{item.creator}</span>
            </div>
            <div className={css.madeInItaly}>Made in {item.country}</div>
            <div className={css.views}>
              Total Views: <span>{item.views}k views</span>
            </div>
            <div className={css.count}>
              <span onClick={decreaseQuantity}>-</span>
              <span>{quantity}</span>
              <span onClick={increaseQuantity}>+</span>
            </div>

            <div className={css.addToCart}>
              <button>
                <span>Add to cart </span>
                <Image
                  src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/ffffff/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </button>
              <div className={css.loveContainer}>
                <Image src="/love.png" width={47} height={32} alt="love" />
              </div>
            </div>

            <div className={css.descriptionHouse}>
              <div className={css.subs}>
                <span>Description</span>
                <div
                  onClick={changeDescription}
                  className={description ? css.upArrow : css.downArrow}
                >
                  <Image
                    src="https://img.icons8.com/ios-filled/23/null/expand-arrow--v1.png"
                    alt="down arrow"
                    fill
                  />
                </div>
              </div>
              <div
                className={description ? css.explanation : css.hideExplanation}
              >
                bulu bala blablablublu Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras eget orci hendrerit, finibus tortor vel,
                tincidunt sapien. Pellentesque pulvinar leo quis odio faucibus
                sodales.
              </div>
            </div>

            <div className={css.descriptionHouse}>
              <div className={css.listings}>
                <span>Listings</span>
                <div
                  onClick={changeListing}
                  className={listing ? css.upArrow : css.downArrow}
                >
                  <Image
                    src="https://img.icons8.com/ios-filled/23/null/expand-arrow--v1.png"
                    alt="down arrow"
                    fill
                  />
                </div>
              </div>
              <div className={listing ? css.explanation : css.hideExplanation}>
                bulu bala blablablublu Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras eget orci hendrerit, finibus tortor vel,
                tincidunt sapien. Pellentesque pulvinar leo quis odio faucibus
                sodales.
              </div>
            </div>

            <div className={css.descriptionHouse}>
              <div className={css.stat}>
                <span>Status</span>
                <div
                  onClick={changeStatus}
                  className={status ? css.upArrow : css.downArrow}
                >
                  <Image
                    src="https://img.icons8.com/ios-filled/23/null/expand-arrow--v1.png"
                    alt="down arrow"
                    fill
                  />
                </div>
              </div>
              <div className={status ? css.explanation : css.hideExplanation}>
                bulu bala blablablublu Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras eget orci hendrerit, finibus tortor vel,
                tincidunt sapien.
              </div>
            </div>
          </div>
        </div>
        <div className={css.exploreCollection}>
          <span>Explore more from this collection</span>
          <div className={css.exploreButton}>
            <button>
              <Image src="/left.png" alt="left arrow" width={25} height={14} />
            </button>
            <button>
              <Image src="/right.png" alt="left arrow" width={25} height={14} />
            </button>
          </div>
        </div>
      </div>

      <div className={css.exploreAll}>
        {/* <Link href={`/market/10`} style={{ textDecoration: 'none' }}> */}
        <div onClick={() => setNum('10')} className={css.exploreImgContainer}>
          <div>
            <div className={css.thickContainer}>
              <Image
                src="/thickLove.png"
                alt="thick love"
                width={30}
                height={26}
              />
            </div>
            <Image
              src="/explore1.png"
              alt="thick love"
              width={446}
              height={421}
            />
            <div className={css.exploreName}>
              <span>Sassy</span>
              <div className={css.explorePrice}>
                <span>$3.20</span>
              </div>
            </div>
          </div>
        </div>
        {/* </Link> */}

        <Link href={`/market/11`} style={{ textDecoration: 'none' }}>
          <div className={css.exploreImgContainer}>
            <div>
              <div className={css.thickContainer}>
                <Image
                  src="/thickLove.png"
                  alt="thick love"
                  width={30}
                  height={26}
                />
              </div>
              <Image
                src="/explore2.png"
                alt="thick love"
                width={446}
                height={421}
              />
              <div className={css.exploreName}>
                <span>Blonde Beauty</span>
                <div className={css.explorePrice}>
                  <span>$5.20</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href={`/market/1`} style={{ textDecoration: 'none' }}>
          <div className={css.exploreImgContainer}>
            <div>
              <div className={css.thickContainer}>
                <Image
                  src="/thickLove.png"
                  alt="thick love"
                  width={30}
                  height={26}
                />
              </div>
              <Image
                src="/Rectangle1.png"
                alt="thick love"
                width={446}
                height={421}
              />
              <div className={css.exploreName}>
                <span>Philomena `22</span>
                <div className={css.explorePrice}>
                  <span>$3.90</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={css.exploreBtn}>
        <button>Explore all</button>
      </div>
    </div>
  );
};
export default Product;
