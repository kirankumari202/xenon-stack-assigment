import styles from "./frontend.module.css";
import BannerImg from "../assets/images/HeroBannerImg.png";

export const Home: React.FC = () => {

    

  return (
    <>
      <section className="px-20 flex w-full">
        <article className="p-5 flex flex-col justify-center gap-4">
          <h1 className="text-5xl font-bold">
            Step Inside <br /> Your <br /> Dreams.
          </h1>
          <p className="text-left">How to build a perfect design system by AU Studio design</p>

          <button type="button" className=" w-36 p-3 px-6 rounded-full text-white bg-blue-700">Get Started</button>
        </article>
        <article className="grow grid place-content-center">
          <img width={700} src={BannerImg} alt="" />
        </article>
      </section>

      <section className={styles.footSection}>
        <ul className="flex justify-around items-center gap-10">
          <li className={styles.footSectionImgContainer}>
            <img
              className="w-18"
              src="https://logodownload.org/wp-content/uploads/2018/02/avast-logo-2.png"
              alt="avast logo"
            />
          </li>
          <li className={styles.footSectionImgContainer}>
            <img
              src="https://logos-download.com/wp-content/uploads/2016/09/BuzzFeed_logo_Buzz_Feed.png"
              alt="Buzz feed"
            />
          </li>
          <li className={styles.footSectionImgContainer}>
            <img
              src="https://logodix.com/logo/1825433.png"
              alt="Booking.com logo"
            />
          </li>
          <li className={styles.footSectionImgContainer}>
            <img
              src="https://logodownload.org/wp-content/uploads/2017/11/expedia-logo-1.png"
              alt="Expedia logo"
            />
          </li>
          <li className={styles.footSectionImgContainer}>
            <img
              src="https://clipground.com/images/dispatch-png-1.png"
              alt="Dispatch logo"
            />
          </li>
        </ul>
      </section>
    </>
  );
};
