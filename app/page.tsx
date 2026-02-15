import { getFeaturedGalleries } from '@/sanity/lib/queries'
import GalleryGrid from '@/components/GalleryGrid'

export default async function Home() {
  const galleries = await getFeaturedGalleries()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Mike J Mitchell
        </h1>
        <p className="text-xl text-gray-600">
          Photography Portfolio
        </p>
      </div>

      {galleries.length > 0 ? (
        <>
          <h2 className="text-3xl font-semibold mb-8">Featured Galleries</h2>
          <GalleryGrid galleries={galleries} />
        </>
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
