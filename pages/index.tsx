/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import Image from 'next/image';
import style from '../styles/Home.module.css';
import NavBar from '../Components/NavBar/NavBar';
import Sidebar from '../Components/SideBar/SideBar';
import Footer from '../Components/Footer/Footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const images = ['/image1.png', '/image2.png', '/image3.png'];
  const slide1 = ['/glassboy.png', '/leaf.png', '/girl.png', '/kangaroo.png'];
  const slide2 = ['/leaf.png', '/girl.png', '/kangaroo.png', '/glassboy.png'];
  const slide3 = ['/girl.png', '/kangaroo.png', '/glassboy.png', '/leaf.png'];
  const slide4 = ['/kangaroo.png', '/glassboy.png', '/leaf.png', '/girl.png'];
  const [imgCount, setImgCount] = useState(0);
  const [slideOne, setSlideOne] = useState(0);

  const changeImg = () => {
    if (imgCount === 2) {
      setImgCount(0);
    } else {
      setImgCount(imgCount + 1);
    }
  };

  const changeSlideOne = () => {
    setSlideOne(prevIndex =>
      prevIndex === slide1.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    setTimeout(() => changeSlideOne(), 4000);
  }, [slideOne]);

  useEffect(() => {
    const slide1TimeOut = setTimeout(() => changeImg(), 4000);
    return () => clearTimeout(slide1TimeOut);
  });

  useEffect(() => {
    setTimeout(() => changeImg(), 4000);
  }, [imgCount]);

  useEffect(() => {
    const timeOut = setTimeout(() => changeImg(), 4000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div className={style.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="ARTSY" content="Phoyography, history," />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500,600,300,200&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavBar page="home" />
      <Sidebar page="home" />
      <div className={style.topHeader}>
        Photography is poetry & beautiful untold stories
      </div>
      <div className={style.subTopHeader}>
        Flip through more than 10,000 vintage shots, old photograghs, historic
        images and captures seamlessly in one place. Register to get top access.
      </div>

      <div className={style.slideContainer}>
        <div className={style.slideImg1}>
          {slide1.map((img, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${img})`,
                transform: `translate3d(${-slideOne * 100}%, 0, 0)`
              }}
              className={style.displayImg}
            ></div>
          ))}
        </div>

        <div className={style.slideImg1}>
          {slide2.map((img, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${img})`,
                transform: `translate3d(${-slideOne * 100}%, 0, 0)`
              }}
              className={style.displayImg}
            ></div>
          ))}
        </div>

        <div className={style.slideImg1}>
          {slide3.map((img, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${img})`,
                transform: `translate3d(${-slideOne * 100}%, 0, 0)`
              }}
              className={style.displayImg}
            ></div>
          ))}
        </div>

        <div className={style.slideImg1}>
          {slide4.map((img, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${img})`,
                transform: `translate3d(${-slideOne * 100}%, 0, 0)`
              }}
              className={style.displayImg}
            ></div>
          ))}
        </div>
      </div>

      {/* carousel for mobile */}
      <div className={style.slideContainerMobile}>
        <div className={style.slideImg1}>
          {slide1.map((img, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${img})`,
                transform: `translate3d(${-slideOne * 100}%, 0, 0)`
              }}
              className={style.displayImg}
            ></div>
          ))}
        </div>
      </div>

      <div className={style.featuredProductHeader}>Featured Images</div>
      <div className={style.productContainer}>
        <div className={style.productImage}>
          <Image
            src="/lady.png"
            alt="lady in black"
            fill
            className={style.prodImg}
          />
          <div className={style.opacityContainer}>
            <div className={style.productImageText}>Boolean Egyptian</div>
            <div
              className={`${style.whiteArrowContainer} animate__animated animate__pulse animate__infinite`}
            >
              <div className={style.whiteArrow}>
                <Image src="/vector.png" alt="vector img" fill />
              </div>
            </div>
          </div>
        </div>
        <div className={style.egyptContainer}>
          <header className={style.egyptianHeader}>The Boolean Egyptian</header>
          <div className={style.loremImsum}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </div>
        </div>
      </div>

      <div className={style.productContainer}>
        <div className={style.productImageMobile}>
          <Image
            src="/mummies.png"
            alt="lady in black"
            fill
            className={style.prodImg}
          />
          <div className={style.productImageText}>Are We There Yet?</div>
          <div
            className={`${style.whiteArrowContainer} animate__animated animate__pulse animate__infinite`}
          >
            <div className={style.whiteArrow}>
              <Image src="/vector.png" alt="vector img" fill />
            </div>
          </div>
        </div>
        <div className={style.egyptContainer}>
          <header className={style.egyptianHeader}>Are We There Yet?</header>
          <div className={style.loremImsum}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </div>
        </div>
        <div className={style.productImageRight}>
          <Image
            src="/mummies.png"
            alt="lady in black"
            fill
            className={style.prodImg}
          />
          <div className={style.opacityContainer}>
            <div className={style.productImageText}>Are We There Yet?</div>
            <div
              className={`${style.whiteArrowContainer} animate__animated animate__pulse animate__infinite`}
            >
              <div className={style.whiteArrow}>
                <Image src="/vector.png" alt="vector img" fill />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.productContainer}>
        <div className={style.productImage}>
          <Image
            src="/pyramid.png"
            alt="pyramid"
            fill
            className={style.prodImg}
          />
          <div className={style.opacityContainer}>
            <div className={style.productImageText}>Pyramid 1997</div>
            <div
              className={`${style.whiteArrowContainer} animate__animated animate__pulse animate__infinite`}
            >
              <div className={style.whiteArrow}>
                <Image src="/vector.png" alt="vector img" fill />
              </div>
            </div>
          </div>
        </div>
        <div className={style.egyptContainer} style={{ padding: '0 0 0 3%' }}>
          <header className={style.egyptianHeader}>Pyramid 1997</header>
          <div className={style.loremImsum}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </div>
        </div>
      </div>

      <div className={style.auction}>
        <div className={style.auctionHeader}>
          See Upcoming Auctions and Exhibitions
        </div>

        <div className={style.upcoming}>
          <div className={style.subContainer}>
            <div className={style.redefined}>MONALISA REDEFINED IN STYLE</div>
            <div className={style.monday}>Start on : 08:00 GTS . Monday</div>
            <div className={style.exclusive}>
              GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
              INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST
              AND LOWEST BIDS.
            </div>
          </div>
          <Link href={`/market/market`} style={{ textDecoration: 'none' }}>
            <div className={style.seemore}>see more</div>
          </Link>
          <button className={style.reminder}>Set a reminder</button>
        </div>
        <div className={style.loader_btn}>
          <div className={style.loader}></div>
          <div className={style.btnContainer}>
            <button>
              <Image
                src="/leftArrow.png"
                alt="leftArrow"
                width={6}
                height={9}
              />
            </button>
            <button>
              <Image
                src="/rightArrow.png"
                alt="rightArrow"
                width={6}
                height={9}
              />
            </button>
          </div>
        </div>
      </div>

      <div className={style.creatorContainer}>
        <div className={style.containerFlex}>
          <header className={style.creatorHeader}>
            TOP CREATORS OF THE WEEK
          </header>
          <div className={style.editorialContainer}>
            <div className={style.editorialLine}></div>
            <ul>
              <li>Editorials</li>
              <li>Fashion</li>
              <li>Lifestyle</li>
              <li>Blueprint</li>
            </ul>
          </div>
        </div>
        <div className={style.creatorNote}>
          “Everything always looked better in black and white. Everything always
          as if it were the first time; theres always more people in a black and
          white photograph. It just makes it seem that there were more people at
          a gig, more people at a football match, than with colour photography.
          Everything looks more exciting.”– Jack Lowden
          <div className={style.circa}>CIRCA</div>
        </div>
        <div className={style.date}>1985</div>

        <div className={imgCount === 0 ? style.circaImg : style.imgTrans}>
          <Image src={images[0]} alt="circa people" fill />
        </div>

        <div className={imgCount === 1 ? style.circaImg : style.imgTrans}>
          <Image src={images[1]} alt="circa people" fill />
        </div>

        <div className={imgCount === 2 ? style.circaImg : style.imgTrans}>
          <Image src={images[2]} alt="circa people" fill />
        </div>
      </div>

      <Footer />
    </div>
  );
}
