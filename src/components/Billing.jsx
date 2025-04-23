import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImg}>
        <img
          src={bill}
          alt="billing"
          className={`w-[100%] h-[100%] relative z-[5]`}
        />

        <div
          className={`absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient`}
        />
        <div
          className={`absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient`}
        />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your billing <br className="sm:block hidden" /> and
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          expedita eaque nesciunt minus! Vitae repudiandae aspernatur laborum
          dolorum!
        </p>

        <div className={`flex flex-row flex-wrap sm:mt-10 mt-6`}>
          <img
            src={apple}
            alt="apple_store"
            className={`w-[128px] h-[42px] object-contain mr-5 cursor-pointer`}
          />
          <img
            src={google}
            alt="apple_store"
            className={`w-[128px] h-[42px] object-contain cursor-pointer`}
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
