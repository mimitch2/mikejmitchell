import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import gallery from '../schemas/gallery'
import galleryImage from '../schemas/galleryImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, galleryImage, blockContentType, categoryType, postType, authorType],
}
