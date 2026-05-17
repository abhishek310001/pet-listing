import styles from "./Badge.module.css";

interface BadgeProps {
  label: string;
  color: string;
}

export function Badge({ label, color }: BadgeProps) {
  return (
    <span className={styles.badge} style={{ backgroundColor: color }}>
      <span className={styles.dot} />
      {label}
    </span>
  );
}
