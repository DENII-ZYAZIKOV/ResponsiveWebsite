import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Найдите более выгодную сделку по картам <br className="sm:block hidden" /> всего за несколько простых
        шагов.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias harum asperiores repudiandae dolores perferendis dicta esse ab excepturi, eveniet earum provident necessitatibus, fugiat optio fugit? Tempora laborum quae voluptatibus pariatur!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
