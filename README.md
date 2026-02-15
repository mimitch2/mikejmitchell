# Mike J Mitchell - Photo Portfolio

A professional photography portfolio built with Next.js, Sanity CMS, and modern web technologies.

## Tech Stack

- **Next.js 15** (App Router) - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Sanity CMS** - Content management
- **Cloudinary** - Image optimization
- **Framer Motion** - Animations
- **yet-another-react-lightbox** - Image lightbox

## Features

- 📸 Photo gallery management through Sanity Studio
- 🎨 Beautiful, responsive design
- ⚡ Optimized image loading
- 🖼️ Interactive lightbox for full-screen image viewing
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-friendly interface
- 🎯 Featured galleries on homepage

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Sanity account (free at [sanity.io](https://www.sanity.io))

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd mikejmitchell
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Sanity:**

   First, create a Sanity project:
   ```bash
   npm install -g @sanity/cli
   sanity login
   sanity init --project-type=clean
   ```

   When prompted:
   - Select "Create new project"
   - Choose a project name
   - Use dataset name: `production`
   - Skip the schema configuration (we already have it)

4. **Configure environment variables:**

   Copy the example env file:
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` and add your Sanity project ID:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

   Find your project ID:
   - In your terminal after running `sanity init`, or
   - At [sanity.io/manage](https://www.sanity.io/manage)

5. **Deploy the Sanity schema:**
   ```bash
   npx sanity@latest schema deploy
   ```

6. **Run the development server:**
   ```bash
   npm run dev
   ```

7. **Open your browser:**
   - Portfolio: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## Project Structure

```
mikejmitchell/
├── app/                      # Next.js app directory
│   ├── gallery/[slug]/       # Individual gallery pages
│   ├── galleries/            # All galleries page
│   ├── studio/               # Sanity Studio route
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/               # React components
│   ├── GalleryGrid.tsx       # Gallery grid component
│   ├── ImageGallery.tsx      # Image gallery with lightbox
│   └── Header.tsx            # Site header
├── sanity/                   # Sanity configuration
│   ├── lib/                  # Sanity client & queries
│   │   ├── client.ts         # Sanity client setup
│   │   ├── image.ts          # Image URL builder
│   │   └── queries.ts        # GROQ queries
│   └── schemas/              # Content schemas
│       ├── gallery.ts        # Gallery document type
│       ├── galleryImage.ts   # Gallery image object
│       └── index.ts          # Schema exports
├── sanity.config.ts          # Sanity Studio config
└── .env.local                # Environment variables
```

## Usage

### Creating a Gallery

1. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)
2. Click "Gallery" in the sidebar
3. Click "Create new Gallery"
4. Fill in:
   - **Title**: Gallery name
   - **Slug**: Auto-generated URL-friendly slug
   - **Description**: Optional description
   - **Cover Image**: Main gallery thumbnail
   - **Images**: Add photos with alt text and captions
   - **Featured**: Toggle to show on homepage
   - **Order**: Number for sorting (lower = first)
5. Click "Publish"

### Managing Images

- Upload images directly to Sanity (automatically hosted)
- Optionally use Cloudinary for advanced optimization
- Add alt text for accessibility
- Add captions for context
- Reorder images by dragging

### Cloudinary Integration (Optional)

To use Cloudinary for advanced image optimization:

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Add your cloud name to `.env.local`:
   ```
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   ```
3. Add Cloudinary public IDs to images in the Studio

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set these in your hosting platform:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` (optional)

### CORS Configuration for Sanity

Add your production domain to Sanity CORS origins:

```bash
sanity cors add https://yourdomain.com --credentials
```

Or add it in the Sanity dashboard at [sanity.io/manage](https://www.sanity.io/manage)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Customization

- **Styles**: Edit Tailwind classes in components or `app/globals.css`
- **Colors**: Modify Tailwind config in `tailwind.config.ts`
- **Schema**: Add fields in `sanity/schemas/`
- **Queries**: Add GROQ queries in `sanity/lib/queries.ts`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Yet Another React Lightbox](https://yet-another-react-lightbox.com/)

## License

MIT License - feel free to use this for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.
