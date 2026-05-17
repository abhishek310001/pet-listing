import { memo } from "react";
import { Badge } from "@/components/ui/Badge";
import { SPECIES_ICONS, STATUS_COLORS } from "@/constants/pets";
import type { Pet } from "@/types/api/pets";
import styles from "./PetCard.module.css";

interface PetCardProps {
  pet: Pet;
  index: number;
}

export const PetCard = memo(function PetCard({ pet, index }: PetCardProps) {
  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={styles.accent} />
      <div className={styles.body}>
        <div className={styles.nameRow}>
          <span className={styles.speciesIcon} aria-label={pet.species}>
            {SPECIES_ICONS[pet.species]}
          </span>
          <h2 className={styles.name}>{pet.name}</h2>
        </div>
        <hr className={styles.divider} />
        <dl className={styles.fields}>
          <div className={styles.field}>
            <dt className={styles.fieldLabel}>Species</dt>
            <dd className={styles.fieldValue}>{pet.species}</dd>
          </div>
          <div className={styles.field}>
            <dt className={styles.fieldLabel}>Foster</dt>
            <dd className={styles.fieldValue}>{pet.foster}</dd>
          </div>
        </dl>
        <div className={styles.footer}>
          <Badge label={pet.status} color={STATUS_COLORS[pet.status]} />
        </div>
      </div>
    </article>
  );
});
