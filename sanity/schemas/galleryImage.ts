import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'cloudinaryPublicId',
      title: 'Cloudinary Public ID',
      type: 'string',
      description: 'Optional: Cloudinary public ID for advanced image optimization',
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
  },
})
