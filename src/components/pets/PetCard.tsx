import { Badge } from "@/components/ui/Badge";
import { STATUS_COLORS } from "@/constants/pets";
import type { Pet } from "@/types/api/pets";
import styles from "./PetCard.module.css";

interface PetCardProps {
  pet: Pet;
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.accent} />
      <div className={styles.body}>
        <h2 className={styles.name}>{pet.name}</h2>
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
}
