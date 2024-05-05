import styles from "./Education.module.css";
import { Rocket } from "./Rocket";

export function Education() {
  return (
    <div className={styles.root}>
      <ul className={styles.education}>
        <li className={styles.text}>
          I'm a junior year
          <br />
          undergrad student.
        </li>
        <li className={styles.icon}>
          <Rocket />
        </li>
        <li className={styles.text}>
          Pursuing bachelors in
          <br />
          Data Science and CSE
        </li>
      </ul>
    </div>
  );
}
