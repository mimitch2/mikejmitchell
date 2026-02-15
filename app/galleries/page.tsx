import { getGalleries } from '@/sanity/lib/queries'
import GalleryGrid from '@/components/GalleryGrid'

export default async function GalleriesPage() {
  const galleries = await getGalleries()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        All Galleries
      </h1>

      {galleries.length > 0 ? (
        <GalleryGrid galleries={galleries} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No galleries yet. Visit the{' '}
            <a href="/studio" className="text-blue-600 hover:underline">
              Studio
            </a>{' '}
            to create your first gallery.
          </p>
        </div>
      )}
    </div>
  )
}
