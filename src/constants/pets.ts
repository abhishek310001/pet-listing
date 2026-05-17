import type { Pet, PetSpecies, PetStatus } from "@/types/api/pets";

export const MOCK_PETS: Pet[] = [
  { id: 1, name: "Mango", species: "Dog",    status: "Available",        foster: "Jamie L." },
  { id: 2, name: "Fig",   species: "Cat",    status: "In Review",        foster: "Priya S." },
  { id: 3, name: "Oslo",  species: "Dog",    status: "Pending Adoption", foster: "Chris M." },
  { id: 4, name: "Clove", species: "Rabbit", status: "Available",        foster: "Nadia R." },
  { id: 5, name: "Wren",  species: "Cat",    status: "Pending Adoption", foster: "Jamie L." },
];

export const SPECIES_OPTIONS: Array<{ value: PetSpecies | ""; label: string }> = [
  { value: "",       label: "All Species" },
  { value: "Dog",    label: "Dog" },
  { value: "Cat",    label: "Cat" },
  { value: "Rabbit", label: "Rabbit" },
];

export const STATUS_OPTIONS: Array<{ value: PetStatus | ""; label: string }> = [
  { value: "",                 label: "All Statuses" },
  { value: "Available",        label: "Available" },
  { value: "In Review",        label: "In Review" },
  { value: "Pending Adoption", label: "Pending Adoption" },
];

export const STATUS_COLORS: Record<PetStatus, string> = {
  "Available":        "var(--color-status-available)",
  "In Review":        "var(--color-status-review)",
  "Pending Adoption": "var(--color-status-pending)",
};

export const SPECIES_ICONS: Record<PetSpecies, string> = {
  Dog:    "🐕",
  Cat:    "🐈",
  Rabbit: "🐇",
};
