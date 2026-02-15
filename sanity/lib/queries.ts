import { client } from './client'

export interface Gallery {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  coverImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  images?: GalleryImage[]
  featured: boolean
  order: number
}

export interface GalleryImage {
  _key: string
  image: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  alt: string
  caption?: string
  cloudinaryPublicId?: string
}

export async function getGalleries(): Promise<Gallery[]> {
  const query = `*[_type == "gallery"] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    coverImage {
      asset,
      alt
    },
    featured,
    order
  }`
  return client.fetch(query)
}

export async function getFeaturedGalleries(): Promise<Gallery[]> {
  const query = `*[_type == "gallery" && featured == true] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    coverImage {
      asset,
      alt
    },
    featured,
    order
  }`
  return client.fetch(query)
}

export async function getGalleryBySlug(slug: string): Promise<Gallery | null> {
  const query = `*[_type == "gallery" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    coverImage {
      asset,
      alt
    },
    images[] {
      _key,
      image {
        asset
      },
      alt,
      caption,
      cloudinaryPublicId
    },
    featured,
    order
  }`
  return client.fetch(query, { slug })
}
