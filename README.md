# Pet Listing

A pet listing interface backed by a filtered Next.js API route. Browse foster pets by species and status with a warm, accessible UI built entirely with plain CSS.

## Features

- `/api/pets` endpoint with `?species=` and `?status=` query param filtering
- Responsive card grid — auto-fills columns down to single-column on mobile
- Shimmer skeleton loading cards and a full error state with retry
- Empty state when filters yield no results
- Zero UI libraries — plain CSS Modules throughout

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **CSS Modules** (no Tailwind, no styled-components)

## Project Structure

```
src/
├── app/
│   ├── api/pets/route.ts     # GET /api/pets with species + status filtering
│   ├── page.tsx              # Root page — wires usePets hook to components
│   └── globals.css           # CSS custom properties design system
├── components/
│   ├── ui/                   # Generic: Badge, Select, LoadingCard, ErrorState
│   └── pets/                 # Domain: PetCard, PetFilters, PetGrid
├── hooks/
│   └── usePets.ts            # Data fetching, filter state, memoized URL building
├── types/
│   ├── common/api.ts         # ApiSuccessResponse<T>, ApiErrorResponse, isApiError()
│   └── api/pets.ts           # Pet, PetStatus, PetSpecies, PetFilters
└── constants/
    └── pets.ts               # Mock data, filter options, status colour map
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API

```
GET /api/pets
GET /api/pets?species=Dog
GET /api/pets?status=Available
GET /api/pets?species=Dog&status=Available
```

**Response shape:**

```json
{
  "data": [
    { "id": 1, "name": "Mango", "species": "Dog", "status": "Available", "foster": "Jamie L." }
  ],
  "count": 1
}
```

Supported `species` values: `Dog`, `Cat`, `Rabbit`  
Supported `status` values: `Available`, `In Review`, `Pending Adoption`

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Production build         |
| `npm run start`   | Start production server  |
| `npm run lint`    | Run ESLint               |
| `npm run type-check` | TypeScript check      |
