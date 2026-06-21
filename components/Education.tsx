import styles from "./Education.module.css";
import { Rocket } from "./Rocket";

export function Education() {
  return (
    <div className={styles.root}>
      <ul className={styles.education}>
        <li className={styles.text}>
          I'm a SWE @Ciena
        </li>
        <li className={styles.icon}>
          <Rocket />
        </li>
        <li className={styles.text}>
          I'm also a full time
          <br />
          archlinux user
        </li>
      </ul>
    </div>
  );
}
