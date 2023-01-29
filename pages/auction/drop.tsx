import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import css from '../../styles/Auction.module.css';
import Footer from '../../Components/Footer/Footer';

const Drop = () => {
  return (
    <main className={css.dropContainer}>
      <NavBar page="drop" />
      <Sidebar page="drop" />

      <div className={css.navigate}>
        <span>Home/ </span>
        <span>Auctions/ </span>
        <span>Live bid /</span>Drop
      </div>

      <div className={css.upcoming}>Upcoming drops</div>
      <div className={css.notification}>
        Turn on notifications so that no drops will miss you.
      </div>
      <div className={css.notifyMe}>Notify me</div>

      <div className={css.showContainer}>
        <div
          style={{ backgroundImage: `url('/eko.png')` }}
          className={css.showImage}
        >
          {/* button only shows for mobile */}
          <button className={css.upcomingMobile}>UPCOMING</button>
          <div className={css.timeContainer}>
            <div style={{ width: '100%' }}>
              <div className={css.timeHeader}>Time remaining</div>
              <div className={css.timeFlex}>
                <span>06 hrs : 45mins : 22s</span> <button>Join</button>
              </div>
            </div>
          </div>
        </div>
        <div className={css.imageDetails}>
          <button>UPCOMING</button>
          <div className={css.imgDate}>November 21 at 11 am WAT</div>
          <div className={css.imgTitle}>Eyo : Eko For Show</div>
          <div className={css.imgLorem}>
            bullu balla bullu balla balla blu blu, Amet odio a aenean quis vitae
            tempus. Sed nunc tempus aliquet lectus ut vulputate.
          </div>
          <div className={css.imgCreator}>
            Creator : <span>Aliya Minat</span>
          </div>
          <div className={css.getNotified}>Get notified</div>
        </div>
      </div>

      <div className={css.showContainer}>
        <div
          style={{ backgroundImage: `url('/flower.png')` }}
          className={css.showImage}
        >
          {/* button only shows for mobile */}
          <button className={css.liveMobile}>LIVE NOW</button>
          <div className={css.timeContainer}>
            <div style={{ width: '100%' }}>
              <div className={css.timeHeader}>Time remaining</div>
              <div className={css.timeFlex}>
                <span>06 hrs : 45mins : 22s</span> <button>Join</button>
              </div>
            </div>
          </div>
        </div>
        <div className={css.imageDetailsLive}>
          <button>Live Now</button>
          <div className={css.imgDate}>November 21 at 11 am WAT</div>
          <div className={css.imgTitle}>Ginger Suburbs</div>
          <div className={css.imgLorem}>
            Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
            vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
          </div>
          <div className={css.imgCreator}>
            Creator : <span>Tina Benson</span>
          </div>
          <div className={css.getNotified}>Join now</div>
        </div>
      </div>

      <div className={css.showContainer}>
        <div
          style={{ backgroundImage: `url('/water.png')` }}
          className={css.showImage}
        >
          {/* button only shows for mobile */}
          <button className={css.mobileEndedBtn}>ENDED</button>
          <div className={css.timeContainer}>
            <div style={{ width: '100%' }}>
              <div className={css.timeHeader}>Auction ended</div>
              <div className={css.timeFlex}>
                <span>2 hours ago</span>{' '}
                <button className={css.endedBtn}>view</button>
              </div>
            </div>
          </div>
        </div>
        <div className={css.imageDetailsEnded}>
          <button>ENDED</button>
          <div className={css.imgDate}>November 21 at 11 am WAT</div>
          <div className={css.imgTitle}>Sink</div>
          <div className={css.imgLorem}>
            Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
            vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
          </div>
          <div className={css.imgCreator}>
            Creator : <span>Aliya Minat</span>
          </div>
          <div className={css.getNotified}>View</div>
        </div>
      </div>

      <div className={css.showContainer}>
        <div
          style={{
            backgroundImage: `url('/mummies.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          className={css.showImage}
        >
          {/* button only shows for mobile */}
          <button className={css.mobileEndedBtn}>ENDED</button>
          <div className={css.timeContainer}>
            <div style={{ width: '100%' }}>
              <div className={css.timeHeader}>Auction ended</div>
              <div className={css.timeFlex}>
                <span>5 hours ago</span>{' '}
                <button className={css.endedBtn}>view</button>
              </div>
            </div>
          </div>
        </div>
        <div className={css.imageDetailsEnded}>
          <button>ENDED</button>
          <div className={css.imgDate}>November 21 at 11 am WAT</div>
          <div className={css.imgTitle}>Warped ‘99</div>
          <div className={css.imgLorem}>
            Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
            vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
          </div>
          <div className={css.imgCreator}>
            Creator : <span>Aliya Minat</span>
          </div>
          <div className={css.getNotified}>View</div>
        </div>
      </div>

      <div className={css.seeMore}>See more</div>

      <Footer />
    </main>
  );
};

export default Drop;
