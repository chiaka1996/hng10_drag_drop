import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import css from '../../styles/Auction.module.css';
import { BarState } from '../../Context/Allcontext';
import Image from 'next/image';

const LiveBid = () => {
  const { bidComments } = BarState();

  return (
    <div className={css.auctContainer}>
      <NavBar page="auction" />
      <Sidebar />

      <div className={css.navigate}>
        <span>Home/ </span>
        <span>Auctions/ </span>Live bid
      </div>

      <div className={css.bidContainer}>
        <div
          className={css.bidImage}
          style={{ backgroundImage: `url('/bid.png')` }}
        >
          <div className={css.cancelContainer}>
            <div className={css.cancel}>
              <div>
                <div className={css.cancel1}></div>
                <div className={css.cancel2}></div>
              </div>
            </div>
            <div>
              <button>Live</button>
            </div>
          </div>

          <div className={css.currentBid}>Current bid $4500</div>
          <div className={css.Tag}>Tag: Lost or Wither</div>
        </div>
        <div>
          <div className={css.commentContainer}>
            {bidComments.map((comment, i) => (
              <div key={i} className={css.list}>
                <Image
                  src={comment.img}
                  alt="bidder"
                  width={50}
                  height={50}
                  style={{ borderRadius: '50%' }}
                />

                <div className={css.commentName}>
                  <div className={css.name}>{comment.name}</div>
                  <div className={css.comm}>{comment.comment}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={css.bidInputContainer}>
            <div className={css.creator}>Creator : Stormi Rylie</div>
            <div className={css.inputLoveContainer}>
              <div>
                <input
                  type="text"
                  placeholder="Place a bid..."
                  className={css.bidInput}
                />
              </div>
              <div>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Image
                    src="/red_love.png"
                    alt="bid like"
                    width={34}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBid;
