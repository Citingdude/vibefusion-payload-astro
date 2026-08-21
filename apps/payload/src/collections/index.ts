import { userCollection } from '@/collections/users/user.collection'
import { mediaCollection } from '@/collections/media/media.collection'
import { CollectionConfig } from 'payload'

const collections: CollectionConfig[] = [
  userCollection,
  mediaCollection,
]

export default collections