import styles from "./ErrorState.module.css";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className={styles.container} role="alert">
      <div className={styles.iconArea} aria-hidden="true">
        <div className={styles.pawPad} />
        <div className={styles.toeRow}>
          <div className={styles.toe} />
          <div className={styles.toe} />
          <div className={styles.toe} />
        </div>
      </div>
      <h2 className={styles.title}>Something went wrong</h2>
      <p className={styles.message}>{message}</p>
      <button type="button" onClick={onRetry} className={styles.retryButton}>
        Try again
      </button>
    </div>
  );
}
