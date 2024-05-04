import { useData } from 'nextra/data';
import { Education } from './Education';
import { Projects } from './Projects';
import styles from './Homepage.module.css';
import { HomepageHero } from './HomepageHero';


export function Homepage() {
  return (
    <>
      <HomepageHero/>
      <div className={styles.content}>
        <Education />
        <Projects />
      </div>
    </>
  );
}
