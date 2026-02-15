'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { GalleryImage } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface ImageGalleryProps {
  images: GalleryImage[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = images.map((img) => ({
    src: urlFor(img.image.asset).width(1920).height(1080).url(),
    alt: img.alt,
    title: img.caption,
  }))

  const handleImageClick = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={img._key}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="cursor-pointer group"
            onClick={() => handleImageClick(index)}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Image
                src={urlFor(img.image.asset).width(600).height(600).url()}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            {img.caption && (
              <p className="mt-2 text-sm text-gray-600 text-center">{img.caption}</p>
            )}
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={slides}
      />
    </>
  )
}
