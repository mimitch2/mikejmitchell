'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { GalleryImage } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { HiChevronRight, HiChevronLeft, HiOutlineXMark } from 'react-icons/hi2';

interface ImageGalleryProps {
    images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const iconClassName =
        'opacity-60 hover:opacity-100 active:scale-93 transition-all duration-200';

    const slides = images.map((img) => ({
        src: urlFor(img.image.asset).url(),
        alt: img.alt,
        title: img.caption
    }));

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    return (
        <>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((img, index) => (
                    <motion.div
                        key={img._key}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="cursor-pointer group break-inside-avoid mb-4"
                        onClick={() => handleImageClick(index)}
                    >
                        <div className="relative overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <Image
                                src={urlFor(img.image.asset).width(800).url()}
                                alt={img.alt}
                                width={800}
                                height={600}
                                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                        {img.caption && (
                            <p className="mt-2 text-sm text-gray-600">
                                {img.caption}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={currentIndex}
                slides={slides}
                render={{
                    slide: ({ slide }) => (
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            style={{
                                border: '20px solid white',
                                maxWidth: '90vw',
                                maxHeight: '90vh'
                            }}
                        />
                    ),
                    iconPrev: () => (
                        <div
                            className={iconClassName}
                            style={{
                                marginLeft: '-16px'
                            }}
                        >
                            <HiChevronLeft color="white" size={50} />
                        </div>
                    ),
                    iconNext: () => (
                        <div
                            className={iconClassName}
                            style={{
                                marginRight: '-16px'
                            }}
                        >
                            <HiChevronRight color="white" size={50} />
                        </div>
                    ),
                    iconClose: () => (
                        <div
                            className={iconClassName}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px'
                            }}
                        >
                            <HiOutlineXMark color="white" size={35} />
                        </div>
                    )
                }}
                styles={{
                    container: {
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        padding: '40px'
                    }
                    // navigationPrev: {
                    //     left: '-10px'
                    // },
                    // navigationNext: {
                    //     right: '-10px'
                    // }
                }}
            />
        </>
    );
}
