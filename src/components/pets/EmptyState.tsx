import { PawDecoration } from "@/components/ui/PawDecoration";
import styles from "./EmptyState.module.css";

export function EmptyState() {
  return (
    <div className={styles.container}>
      <PawDecoration size="md" opacity={0.2} />
      <p className={styles.title}>No pets found</p>
      <p className={styles.message}>Try adjusting your filters to see more results.</p>
    </div>
  );
}
