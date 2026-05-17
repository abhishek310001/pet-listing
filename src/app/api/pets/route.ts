import { NextRequest, NextResponse } from "next/server";
import type { Pet } from "@/types/api/pets";
import type { ApiSuccessResponse, ApiErrorResponse } from "@/types/common/api";
import { MOCK_PETS } from "@/constants/pets";

interface RawFilters {
  species: string;
  status: string;
  name: string;
}

function applyFilters(pets: Pet[], filters: RawFilters): Pet[] {
  const nameLower = filters.name.toLowerCase();
  return pets.filter((pet) => {
    if (filters.species && pet.species !== filters.species) return false;
    if (filters.status && pet.status !== filters.status) return false;
    if (nameLower && !pet.name.toLowerCase().includes(nameLower)) return false;
    return true;
  });
}

export function GET(
  request: NextRequest
): NextResponse<ApiSuccessResponse<Pet[]> | ApiErrorResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const filters: RawFilters = {
      species: searchParams.get("species") ?? "",
      status:  searchParams.get("status") ?? "",
      name:    searchParams.get("name") ?? "",
    };

    const filtered = applyFilters(MOCK_PETS, filters);

    return NextResponse.json({ data: filtered, count: filtered.length });
  } catch {
    return NextResponse.json(
      { error: "INTERNAL_ERROR", message: "Failed to fetch pets" },
      { status: 500 }
    );
  }
}
