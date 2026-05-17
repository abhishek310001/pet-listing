import styles from "./PetResultsMeta.module.css";

interface PetResultsMetaProps {
  count: number;
  total: number;
  loading: boolean;
}

export function PetResultsMeta({ count, total, loading }: PetResultsMetaProps) {
  function buildLabel(): string {
    if (loading) return "Loading…";
    if (count === total) return `All ${total} pets`;
    return `Showing ${count} of ${total} pets`;
  }

  return (
    <div className={styles.bar} aria-live="polite" aria-atomic="true">
      <span className={`${styles.label} ${loading ? styles.faded : ""}`}>
        {buildLabel()}
      </span>
      {!loading && count !== total && (
        <span className={styles.chip}>{count}</span>
      )}
    </div>
  );
}
