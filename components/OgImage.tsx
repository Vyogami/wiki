import heroStyles from "./HomepageHero.module.css";
import styles from "./OgImage.module.css";

export function OgImage() {
  return (
    <div className={heroStyles.root}>
      <div className={heroStyles.tilesBg}></div>
      <div className={heroStyles.tiles}></div>
      <div className={heroStyles.content}>
        <div className={styles.logoContainer}>
          <img src="/pfp.jpeg" className={styles.avatar} />
        </div>
        <h1 className={heroStyles.headline}>Shivam Shandilya</h1>
        <div style={{ height: 5 }}></div>
      </div>
    </div>
  );
}
