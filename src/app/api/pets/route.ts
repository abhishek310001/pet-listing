import { NextRequest, NextResponse } from "next/server";
import type { Pet, PetFilters } from "@/types/api/pets";
import type { ApiSuccessResponse, ApiErrorResponse } from "@/types/common/api";
import { MOCK_PETS } from "@/constants/pets";

function applyFilters(pets: Pet[], filters: Partial<PetFilters>): Pet[] {
  return pets.filter((pet) => {
    if (filters.species && pet.species !== filters.species) return false;
    if (filters.status && pet.status !== filters.status) return false;
    return true;
  });
}

export function GET(
  request: NextRequest
): NextResponse<ApiSuccessResponse<Pet[]> | ApiErrorResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const species = searchParams.get("species") ?? "";
    const status = searchParams.get("status") ?? "";

    const filtered = applyFilters(MOCK_PETS, { species, status } as Partial<PetFilters>);

    return NextResponse.json({ data: filtered, count: filtered.length });
  } catch {
    return NextResponse.json(
      { error: "INTERNAL_ERROR", message: "Failed to fetch pets" },
      { status: 500 }
    );
  }
}
