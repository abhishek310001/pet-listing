import { SearchInput } from "@/components/ui/SearchInput";
import { Select } from "@/components/ui/Select";
import { SPECIES_OPTIONS, STATUS_OPTIONS } from "@/constants/pets";
import type { PetFilters } from "@/types/api/pets";
import styles from "./PetFilters.module.css";

interface PetFiltersProps {
  filters: PetFilters;
  hasActiveFilters: boolean;
  onSpeciesChange: (value: PetFilters["species"]) => void;
  onStatusChange: (value: PetFilters["status"]) => void;
  onNameChange: (value: string) => void;
  onClear: () => void;
}

export function PetFilters({
  filters,
  hasActiveFilters,
  onSpeciesChange,
  onStatusChange,
  onNameChange,
  onClear,
}: PetFiltersProps) {
  function handleSpeciesChange(value: string) {
    onSpeciesChange(value as PetFilters["species"]);
  }

  function handleStatusChange(value: string) {
    onStatusChange(value as PetFilters["status"]);
  }

  return (
    <section className={styles.container} aria-label="Filter pets">
      <SearchInput
        id="name-search"
        label="Search"
        value={filters.name}
        placeholder="Search by name…"
        onChange={onNameChange}
      />
      <div className={styles.divider} />
      <Select
        id="species-filter"
        label="Species"
        value={filters.species}
        options={SPECIES_OPTIONS}
        onChange={handleSpeciesChange}
      />
      <Select
        id="status-filter"
        label="Status"
        value={filters.status}
        options={STATUS_OPTIONS}
        onChange={handleStatusChange}
      />
      {hasActiveFilters && (
        <button type="button" onClick={onClear} className={styles.clearButton}>
          Clear filters
        </button>
      )}
    </section>
  );
}
