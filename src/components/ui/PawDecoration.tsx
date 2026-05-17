import styles from "./PawDecoration.module.css";

type PawSize = "sm" | "md" | "lg";

interface PawDecorationProps {
  size?: PawSize;
  opacity?: number;
}

export function PawDecoration({ size = "md", opacity = 1 }: PawDecorationProps) {
  return (
    <div className={`${styles.paw} ${styles[size]}`} style={{ opacity }} aria-hidden="true">
      <div className={styles.pad} />
      <div className={styles.toeRow}>
        <div className={styles.toe} />
        <div className={styles.toe} />
        <div className={styles.toe} />
      </div>
    </div>
  );
}
