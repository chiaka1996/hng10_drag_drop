import React, { useState, useRef } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import css from '../../styles/market.module.css';
import Image from 'next/image';

const Product = () => {
  return (
    <div style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
      <NavBar page="market" />
      <Sidebar />
      <div className={css.itemContainer}>
        <div className={css.productLink}>
          Home/ Marketplace/ Editorials/{' '}
          <span style={{ color: 'black' }}>Philomena ‘22</span>
        </div>

        <div className={css.itemBreakdown}>
          <Image
            src="/Rectangle300.png"
            className={css.descriptionImg}
            width={500}
            height={800}
            alt="item"
          />

          <div className={css.itemDescription}>
            <div className={css.itemHeader}>
              <div className={css.headerName}>Boolean Egyptian</div>
              <div className={css.headerPrice}>
                <Image
                  src="/etheurum.png"
                  alt="etheurum"
                  width={33}
                  height={40}
                  className={css.eth}
                />
                <span>0.09</span>
              </div>
            </div>
            <div className={css.creatorDiv}>
              Creator : <span>Ali Darwa</span>
            </div>
            <div className={css.madeInItaly}>Made in Italy</div>
            <div className={css.views}>
              Total Views: <span>1.7k views</span>
            </div>
            <div className={css.count}>
              -<span>1</span> +
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
            <div className={css.subs}>
              <span>Description</span>
              <Image src="/down_arrow.png" width={25} height={14} alt="arrow" />
            </div>
            <div className={css.listings}>
              <span>Listings</span>
              <Image src="/down_arrow.png" width={25} height={14} alt="arrow" />
            </div>
            <div className={css.stat}>
              <span>Status</span>
              <Image src="/down_arrow.png" width={25} height={14} alt="arrow" />
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
              src="/explore1.png"
              alt="thick love"
              width={446}
              height={421}
            />
            <div className={css.exploreName}>
              <span>Sassy</span>
              <div className={css.explorePrice}>
                <Image
                  src="/etheurum.png"
                  alt="etheurum"
                  width={27}
                  height={34}
                />
                <span>3.20</span>
              </div>
            </div>
          </div>
        </div>

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
              <span>Sassy</span>
              <div className={css.explorePrice}>
                <Image
                  src="/etheurum.png"
                  alt="etheurum"
                  width={27}
                  height={34}
                />
                <span>3.20</span>
              </div>
            </div>
          </div>
        </div>

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
              <span>Sassy</span>
              <div className={css.explorePrice}>
                <Image
                  src="/etheurum.png"
                  alt="etheurum"
                  width={27}
                  height={34}
                />
                <span>3.20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.exploreBtn}>
        <button>Explore all</button>
      </div>
    </div>
  );
};
export default Product;
