"use client";

import { usePets } from "@/hooks/usePets";
import { PetFilters } from "@/components/pets/PetFilters";
import { PetGrid } from "@/components/pets/PetGrid";
import { PetResultsMeta } from "@/components/pets/PetResultsMeta";
import { PawDecoration } from "@/components/ui/PawDecoration";
import styles from "./page.module.css";

export default function HomePage() {
  const {
    pets,
    loading,
    error,
    total,
    filters,
    hasActiveFilters,
    setSpecies,
    setStatus,
    setName,
    clearFilters,
    retry,
  } = usePets();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.eyebrow}>Foster Network</p>
          <h1 className={styles.title}>Find Your Forever Friend</h1>
          <p className={styles.subtitle}>
            Browse pets in our care, each one waiting for their next chapter.
          </p>
        </div>
        <div className={styles.headerDecor}>
          <PawDecoration size="lg" opacity={0.12} />
        </div>
      </header>

      <div className={styles.content}>
        <PetFilters
          filters={filters}
          hasActiveFilters={hasActiveFilters}
          onNameChange={setName}
          onSpeciesChange={setSpecies}
          onStatusChange={setStatus}
          onClear={clearFilters}
        />
        <PetResultsMeta count={pets.length} total={total} loading={loading} />
        <PetGrid pets={pets} loading={loading} error={error} onRetry={retry} />
      </div>
    </main>
  );
}
