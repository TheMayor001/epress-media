# E-Press Media Project Summary

## Project Structure
- **Frontend**: Next.js application in `epress-media-frontend/`
- **Backend**: CMS API in `epress-media-backend/` with schemas for articles and authors
- **API Configuration**: Frontend connects to CMS API at `NEXT_PUBLIC_CMS_API_URL`

## Key Components
### Article Schema
```typescript
interface Article {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  coverImage: {
    url: string;
    alt: string;
  };
  category: "Politics" | "Business" | "Sports" | "Lifestyle";
  publicationDate: Date;
  author: {
    id: string;
    name: string;
  };
}
```

### Author Schema
```typescript
interface Author {
  name: string;
  bio: string;
  avatar: {
    url: string;
    alt: string;
  };
  email: string;
}
```

## Commands
- **Start frontend**: `cd epress-media-frontend && npm run dev`
- **API Endpoint**: `http://localhost:1337` (default from api.ts)
- **Frontend URL**: `http://localhost:3000`

## Current State
- Frontend is running and attempting to fetch articles from CMS
- Need to create seed data for articles to display on the site
- API service in `epress-media-frontend/lib/api.ts` handles data fetching