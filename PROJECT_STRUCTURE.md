# Project Structure Overview

## Complete File Structure

```
mikejmitchell/
├── app/
│   ├── gallery/
│   │   └── [slug]/
│   │       └── page.tsx           # Dynamic gallery detail page
│   ├── galleries/
│   │   └── page.tsx               # All galleries listing
│   ├── studio/
│   │   └── [[...tool]]/
│   │       ├── page.tsx           # Sanity Studio page
│   │       └── layout.tsx         # Studio layout
│   ├── favicon.ico                # Site favicon
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout with header/footer
│   └── page.tsx                   # Homepage with featured galleries
│
├── components/
│   ├── GalleryGrid.tsx            # Grid display for galleries
│   ├── ImageGallery.tsx           # Image gallery with lightbox
│   └── Header.tsx                 # Site navigation header
│
├── sanity/
│   ├── lib/
│   │   ├── client.ts              # Sanity client configuration
│   │   ├── image.ts               # Image URL builder helper
│   │   └── queries.ts             # GROQ queries & TypeScript types
│   └── schemas/
│       ├── gallery.ts             # Gallery document schema
│       ├── galleryImage.ts        # Gallery image object schema
│       └── index.ts               # Schema type exports
│
├── .env.local.example             # Environment variables template
├── .gitignore                     # Git ignore rules
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies & scripts
├── postcss.config.js              # PostCSS configuration
├── README.md                      # Full documentation
├── QUICKSTART.md                  # Quick setup guide
├── PROJECT_STRUCTURE.md           # This file
├── sanity.config.ts               # Sanity Studio configuration
├── tailwind.config.ts             # Tailwind CSS configuration
└── tsconfig.json                  # TypeScript configuration
```

## Key Files Explained

### App Router Pages

- **`app/page.tsx`**: Homepage showing featured galleries
- **`app/galleries/page.tsx`**: Page showing all galleries
- **`app/gallery/[slug]/page.tsx`**: Dynamic page for individual gallery
- **`app/studio/[[...tool]]/page.tsx`**: Embedded Sanity Studio

### Components

- **`GalleryGrid.tsx`**: Animated grid layout for gallery cards with Framer Motion
- **`ImageGallery.tsx`**: Image display with lightbox integration
- **`Header.tsx`**: Navigation bar component

### Sanity Configuration

- **`sanity.config.ts`**: Studio configuration (title, project ID, plugins)
- **`sanity/schemas/gallery.ts`**: Gallery document type with fields:
  - title (string, required)
  - slug (slug, required)
  - description (text)
  - coverImage (image with alt text)
  - images (array of galleryImage objects)
  - featured (boolean)
  - order (number)

- **`sanity/schemas/galleryImage.ts`**: Image object type with fields:
  - image (image, required)
  - alt (string, required)
  - caption (string)
  - cloudinaryPublicId (string, optional)

### Sanity Client

- **`sanity/lib/client.ts`**: Configured Sanity client for fetching data
- **`sanity/lib/image.ts`**: Image URL builder for Sanity images
- **`sanity/lib/queries.ts`**: TypeScript interfaces and GROQ queries:
  - `getGalleries()`: Fetch all galleries
  - `getFeaturedGalleries()`: Fetch featured galleries only
  - `getGalleryBySlug(slug)`: Fetch single gallery with all images

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with featured galleries |
| `/galleries` | List of all galleries |
| `/gallery/[slug]` | Individual gallery detail page |
| `/studio` | Sanity Studio CMS interface |

## Technology Integration

### Next.js App Router
- Server components for optimal performance
- Dynamic routes for galleries
- Image optimization with next/image

### Sanity CMS
- Embedded Studio at `/studio`
- GROQ queries for content fetching
- Image hosting and delivery

### Tailwind CSS
- Utility-first styling
- Responsive design
- Custom color scheme

### Framer Motion
- Page and component animations
- Smooth transitions
- Stagger effects on grid items

### Yet Another React Lightbox
- Full-screen image viewing
- Keyboard navigation
- Touch/swipe support

### Cloudinary (Optional)
- Advanced image optimization
- CDN delivery
- Transformation API

## Data Flow

1. **Content Creation**: Editor creates galleries in Sanity Studio
2. **Data Storage**: Content stored in Sanity's cloud
3. **Data Fetching**: Next.js pages fetch content via GROQ queries
4. **Rendering**: Server components render optimized HTML
5. **Client Interactivity**: Client components handle animations and lightbox
6. **Image Delivery**: Images served via Sanity CDN (or Cloudinary)

## Environment Variables

Required:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Dataset name (default: "production")

Optional:
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Cloudinary account name

## Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push to GitHub
2. Import in Vercel
3. Set environment variables
4. Deploy automatically

## Next Steps for Customization

1. **Add more schema fields**: Edit `sanity/schemas/gallery.ts`
2. **Customize styles**: Modify Tailwind classes in components
3. **Add new pages**: Create files in `app/` directory
4. **Extend queries**: Add GROQ queries in `sanity/lib/queries.ts`
5. **Add SEO**: Implement metadata in page components
6. **Analytics**: Integrate Google Analytics or similar
7. **Contact form**: Add a contact page
8. **About page**: Create an about/bio page

