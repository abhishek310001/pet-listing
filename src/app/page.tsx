"use client";

import { usePets } from "@/hooks/usePets";
import { PetFilters } from "@/components/pets/PetFilters";
import { PetGrid } from "@/components/pets/PetGrid";
import styles from "./page.module.css";

export default function HomePage() {
  const { pets, loading, error, filters, setSpecies, setStatus, retry } = usePets();

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
        <div className={styles.headerDecor} aria-hidden="true">
          <div className={styles.decalPaw}>
            <div className={styles.decalPad} />
            <div className={styles.decalToeRow}>
              <div className={styles.decalToe} />
              <div className={styles.decalToe} />
              <div className={styles.decalToe} />
            </div>
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <PetFilters
          filters={filters}
          onSpeciesChange={setSpecies}
          onStatusChange={setStatus}
        />
        <PetGrid pets={pets} loading={loading} error={error} onRetry={retry} />
      </div>
    </main>
  );
}
