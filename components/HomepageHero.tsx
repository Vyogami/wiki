import Link from 'next/link';
import styles from './HomepageHero.module.css';
import { Album, Github } from 'lucide-react';
import { Spotlight } from './Spotlight';

export function HomepageHero() {
  return (
    <div className={styles.root}>
      <div className={styles.tilesBg}></div>
      <div className={styles.tiles}></div>
      <div className={styles.content}>
        <div className={styles.avatarContainer}>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"/>
          <center>
          <img src='/pfp.jpeg' className={styles.avatar}/>
          </center>
        </div>
        <h1 className={styles.headline}>
          Shivam Shandilya
        </h1>
        <p className={styles.subtitle}>
          Hi! 👋 I'm a Devloper, Data analyst and an Engineer.
        </p>
        <div className={styles.actions}>
          <Link className={styles.cta} href="/wiki/resources">
            Browse Wiki <Album className={styles.icon}/>
          </Link>
          <a
            className={styles.secondaryAction}
            href="https://github.com/vyogami"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <Github className={styles.icon}/> 
          </a>
        </div>
      </div>
    </div>
  );
}
