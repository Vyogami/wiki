import { Education } from './Education';
import { Projects } from './Projects';
import styles from './Homepage.module.css';
import { HomepageHero } from './HomepageHero';
import { TechStack } from './TechStack';

export function Homepage() {
  return (
    <>
      <HomepageHero/>
      <div className={styles.content}>
        <Education />
        <TechStack />
        <Projects />
      </div>
    </>
  );
}
