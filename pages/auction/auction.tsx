import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import css from '../../styles/Auction.module.css';
import Image from 'next/image';

const Auction = () => {
  return (
    <div className={css.auctContainer}>
      <NavBar page="auction" />
      <Sidebar />

      <div className={css.navigate}>
        <span>Home/ </span>Auctions
      </div>
      <div className={css.overview}>
        Here’s an overview of products actively on auction, explore!
      </div>
      <div className={css.auctionImages}>
        <div className={css.imgItem}>
          <Image
            src="/sunshine.png"
            alt="sunshine image"
            width={485}
            height={396}
          />
          <div className={css.imgTime}>6hrs : 40mins: 5s</div>
        </div>
        <div className={css.imgItem}>
          <Image
            src="/lantern.png"
            alt="lantern image"
            width={485}
            height={396}
          />
          <div className={css.imgTime}>6hrs : 40mins: 5s</div>
        </div>
        <div className={css.imgItem}>
          <Image
            src="/cloths.png"
            alt="cloths image"
            width={485}
            height={396}
          />
          <div className={css.imgTime}>6hrs : 40mins: 5s</div>
        </div>
      </div>
      <div className={css.topBids}>Top bids from popular creators</div>

      <div className={css.topBidGrid}>
        <div>
          <div className={css.imgContainer}>
            <div className={css.loveContainer}>
              <div className={css.loveCircle}>
                <Image
                  src="/red_love.png"
                  alt="red love"
                  width={30}
                  height={24}
                />
              </div>
            </div>
            <Image
              src="/light_box.png"
              alt="light and bulbs"
              width={500}
              height={210}
            />
            <div className={css.subText}>Out of the box</div>
          </div>
          <div className={css.details}>
            Creator: <span>Dan Murray</span>
          </div>
          <div className={css.details}>
            Date: <span>12/08/22</span>
          </div>
          <div className={css.details}>
            Highest bid: <span>0.57 ETH</span>
          </div>
          <div className={css.currentBidContainer}>
            <div>
              <div className={css.bid}>Current bid</div>
              <div className={css.bidPrice}>0.987 ETH</div>
            </div>
            <div>
              <button>Place bid</button>
            </div>
          </div>
        </div>

        {/* <div className={css.topBidGrid}> */}
        <div>
          <div className={css.imgContainer}>
            <div className={css.loveContainer}>
              <div className={css.loveCircle}>
                <Image
                  src="/light_red_love.png"
                  alt="red love"
                  width={30}
                  height={24}
                />
              </div>
            </div>
            <Image
              src="/chair.png"
              alt="light and bulbs"
              width={500}
              height={210}
            />
            <div className={css.subText}>Falling apart</div>
          </div>
          <div className={css.details}>
            Creator: <span>Jacob Banks</span>
          </div>
          <div className={css.details}>
            Date: <span>12/08/22</span>
          </div>
          <div className={css.details}>
            Highest bid: <span>0.34 ETH</span>
          </div>
          <div className={css.currentBidContainer}>
            <div>
              <div className={css.bid}>Current bid</div>
              <div className={css.bidPrice}>0.99 ETH</div>
            </div>
            <div>
              <button>Place bid</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
