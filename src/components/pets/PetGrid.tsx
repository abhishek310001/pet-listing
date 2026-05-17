import { ErrorState } from "@/components/ui/ErrorState";
import { LoadingCard } from "@/components/ui/LoadingCard";
import type { Pet } from "@/types/api/pets";
import { EmptyState } from "./EmptyState";
import { PetCard } from "./PetCard";
import styles from "./PetGrid.module.css";

interface PetGridProps {
  pets: Pet[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

export function PetGrid({ pets, loading, error, onRetry }: PetGridProps) {
  function renderContent(): React.ReactNode {
    if (loading) return <LoadingCard count={5} />;
    if (error) return <ErrorState message={error} onRetry={onRetry} />;
    if (pets.length === 0) return <EmptyState />;
    return pets.map((pet, index) => <PetCard key={pet.id} pet={pet} index={index} />);
  }

  return (
    <section
      className={styles.grid}
      aria-label="Pet listings"
      aria-live="polite"
      aria-busy={loading}
    >
      {renderContent()}
    </section>
  );
}
