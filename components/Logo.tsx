import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className={styles.root}>
      <img src="/pfp.jpeg" className={styles.logoImg} />
      <div className={styles.separator} />
      <span className={styles.title}>Vyogami</span>
    </div>
  );
}
