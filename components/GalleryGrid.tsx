'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Gallery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface GalleryGridProps {
  galleries: Gallery[]
}

export default function GalleryGrid({ galleries }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleries.map((gallery, index) => (
        <motion.div
          key={gallery._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            href={`/gallery/${gallery.slug.current}`}
            className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {gallery.coverImage && (
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={urlFor(gallery.coverImage.asset).width(800).height(600).url()}
                  alt={gallery.coverImage.alt || gallery.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {gallery.title}
              </h3>
              {gallery.description && (
                <p className="text-gray-600 line-clamp-2">{gallery.description}</p>
              )}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
