import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Hobi</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Bermain Game</span>
            <span className="chip">Mendengarkan Musik</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
