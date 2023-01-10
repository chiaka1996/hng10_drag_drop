import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import style from '../../styles/payment.module.css';
import Image from 'next/image';

const Success = () => {
  return (
    <main className={style.successContainer}>
      <NavBar page="" />
      <Sidebar />

      <Image
        src="/sucess_ellipse1.png"
        alt="success ellipse"
        width={470}
        height={470}
        className={style.ellipse1}
      />

      <Image
        src="/sucess_elipse2.png"
        alt="success ellipse"
        width={520}
        height={520}
        className={style.ellipse2}
      />
      <div className={style.lightgreen}></div>
      <div className={style.purple}></div>
      <div className={style.orange}></div>

      <div className={style.successSubContainer}>
        <Image
          src="/successImg.png"
          alt="congrat Image"
          width={450}
          height={400}
          className={style.successImage}
        />

        <div className={style.successNote}>
          Hey Celestina, thank you for your purchase
        </div>

        <div className={style.successSubNote}>
          You are amazing. Cheers to being{' '}
          <span style={{ color: '#616161' }}>ARTSY!</span>
        </div>
      </div>
    </main>
  );
};

export default Success;
