import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import css from '../../styles/Auction.module.css';
import { BarState } from '../../Context/Allcontext';
import Image from 'next/image';

const LiveBid = () => {
  const { bidComments } = BarState();

  return (
    <main>
      <div className={css.auctContainerLive}>
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

            <div className={css.currentBid}>Current bid $45.00</div>
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

      {/* this is for the mobile view */}
      <div className={css.mobileAuctionContainer}>
        <div className={css.topFlex}>
          <div className={css.tagLost}>Tag: Lost or Wither</div>
          <div className={css.flex1}></div>
          <button className={css.mobileLive}>Live</button>
          <div className={css.liveCount}>
            <div className={css.eyeContainer}>
              <Image
                src="/eye.png"
                width={15}
                height={11}
                alt="eye png"
                className={css.eyeImg}
              />
              <span>296</span>
            </div>
          </div>
          <div className={css.mobileCancel}>
            <div className={css.cancel1}></div>
            <div className={css.cancel2}></div>
          </div>
        </div>

        <div className={css.mobileBid}>Current bid : $45.00 </div>

        <section className={css.commentSection}>
          <div className={css.commentContainer}>
            {bidComments.map((comment, i) =>
              i < 4 ? (
                <div key={i} className={css.list}>
                  <Image
                    src={comment.img}
                    alt="bidder"
                    width={30}
                    height={30}
                    style={{ borderRadius: '50%' }}
                  />

                  <div className={css.commentName}>
                    <div className={css.name}>{comment.name}</div>
                    <div className={css.comm}>{comment.comment}</div>
                  </div>
                </div>
              ) : (
                ''
              )
            )}
          </div>

          <div className={css.bidInputContainer}>
            <div className={css.creator}>Creator : Stormi Rylie</div>
            <div className={css.inputLoveContainer}>
              <div className={css.inputHouse}>
                <input
                  type="text"
                  placeholder="Join conversation..."
                  className={css.bidInput}
                />
              </div>
              <div>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: '1px solid white',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Image
                    src="/red_love.png"
                    alt="bid like"
                    width={19}
                    height={19}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LiveBid;
