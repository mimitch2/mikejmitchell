import { notFound } from 'next/navigation'
import { getGalleryBySlug } from '@/sanity/lib/queries'
import ImageGallery from '@/components/ImageGallery'

interface GalleryPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { slug } = await params
  const gallery = await getGalleryBySlug(slug)

  if (!gallery) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {gallery.title}
        </h1>
        {gallery.description && (
          <p className="text-lg text-gray-600">{gallery.description}</p>
        )}
      </div>

      {gallery.images && gallery.images.length > 0 ? (
        <ImageGallery images={gallery.images} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No images in this gallery yet. Add images in the{' '}
            <a href="/studio" className="text-blue-600 hover:underline">
              Studio
            </a>
            .
          </p>
        </div>
      )}
    </div>
  )
}
