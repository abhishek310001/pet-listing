import { ErrorState } from "@/components/ui/ErrorState";
import { LoadingCard } from "@/components/ui/LoadingCard";
import type { Pet } from "@/types/api/pets";
import { PetCard } from "./PetCard";
import styles from "./PetGrid.module.css";

interface PetGridProps {
  pets: Pet[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyIcon} aria-hidden="true">
        <div className={styles.pawPad} />
        <div className={styles.toeRow}>
          <div className={styles.toe} />
          <div className={styles.toe} />
          <div className={styles.toe} />
        </div>
      </div>
      <p className={styles.emptyTitle}>No pets found</p>
      <p className={styles.emptyMessage}>Try adjusting your filters to see more results.</p>
    </div>
  );
}

export function PetGrid({ pets, loading, error, onRetry }: PetGridProps) {
  function renderContent(): React.ReactNode {
    if (loading) return <LoadingCard count={5} />;
    if (error) return <ErrorState message={error} onRetry={onRetry} />;
    if (pets.length === 0) return <EmptyState />;
    return pets.map((pet) => <PetCard key={pet.id} pet={pet} />);
  }

  return (
    <section className={styles.grid} aria-label="Pet listings" aria-live="polite" aria-busy={loading}>
      {renderContent()}
    </section>
  );
}
