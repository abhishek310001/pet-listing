export type PetStatus = "Available" | "In Review" | "Pending Adoption";
export type PetSpecies = "Dog" | "Cat" | "Rabbit";

export interface Pet {
  id: number;
  name: string;
  species: PetSpecies;
  status: PetStatus;
  foster: string;
}

export interface PetFilters {
  species: PetSpecies | "";
  status: PetStatus | "";
  name: string;
}
