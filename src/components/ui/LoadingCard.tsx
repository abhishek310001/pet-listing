import styles from "./LoadingCard.module.css";

interface LoadingCardProps {
  count?: number;
}

export function LoadingCard({ count = 5 }: LoadingCardProps) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={styles.card} aria-hidden="true">
          <div className={styles.accent} />
          <div className={styles.body}>
            <div className={`${styles.skeleton} ${styles.name}`} />
            <div className={styles.divider} />
            <div className={styles.fields}>
              <div className={`${styles.skeleton} ${styles.fieldShort}`} />
              <div className={`${styles.skeleton} ${styles.fieldMedium}`} />
            </div>
            <div className={`${styles.skeleton} ${styles.badge}`} />
          </div>
        </div>
      ))}
    </>
  );
}
