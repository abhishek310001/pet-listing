"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { Pet, PetFilters } from "@/types/api/pets";
import type { ApiSuccessResponse, ApiErrorResponse } from "@/types/common/api";
import { isApiError } from "@/types/common/api";
import { useDebounce } from "./useDebounce";

const NAME_DEBOUNCE_MS = 300;

interface UsePetsState {
  pets: Pet[];
  loading: boolean;
  error: string | null;
}

export interface UsePetsReturn extends UsePetsState {
  filters: PetFilters;
  hasActiveFilters: boolean;
  setSpecies: (value: PetFilters["species"]) => void;
  setStatus: (value: PetFilters["status"]) => void;
  setName: (value: string) => void;
  clearFilters: () => void;
  retry: () => void;
}

const DEFAULT_FILTERS: PetFilters = { species: "", status: "", name: "" };

const INITIAL_STATE: UsePetsState = { pets: [], loading: true, error: null };

export function usePets(): UsePetsReturn {
  const [filters, setFilters] = useState<PetFilters>(DEFAULT_FILTERS);
  const [state, setState] = useState<UsePetsState>(INITIAL_STATE);

  const debouncedName = useDebounce(filters.name, NAME_DEBOUNCE_MS);

  const fetchUrl = useMemo(() => {
    const params = new URLSearchParams();
    if (filters.species) params.set("species", filters.species);
    if (filters.status) params.set("status", filters.status);
    if (debouncedName) params.set("name", debouncedName);
    const qs = params.toString();
    return `/api/pets${qs ? `?${qs}` : ""}`;
  }, [filters.species, filters.status, debouncedName]);

  const fetchPets = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const res = await fetch(fetchUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: ApiSuccessResponse<Pet[]> | ApiErrorResponse = await res.json();
      if (isApiError(json)) {
        setState({ pets: [], loading: false, error: json.message });
      } else {
        setState({ pets: json.data, loading: false, error: null });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setState({ pets: [], loading: false, error: message });
    }
  }, [fetchUrl]);

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  const setSpecies = useCallback((value: PetFilters["species"]) => {
    setFilters((prev) => ({ ...prev, species: value }));
  }, []);

  const setStatus = useCallback((value: PetFilters["status"]) => {
    setFilters((prev) => ({ ...prev, status: value }));
  }, []);

  const setName = useCallback((value: string) => {
    setFilters((prev) => ({ ...prev, name: value }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  const hasActiveFilters = useMemo(
    () => Boolean(filters.species || filters.status || filters.name),
    [filters.species, filters.status, filters.name]
  );

  return {
    ...state,
    filters,
    hasActiveFilters,
    setSpecies,
    setStatus,
    setName,
    clearFilters,
    retry: fetchPets,
  };
}
