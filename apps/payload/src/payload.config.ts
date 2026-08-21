import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Keep these imports relative so this config can be consumed by applications
// other than Next.js (for example Astro's server runtime).
import collections from './collections'
import { userCollection } from './collections/users/user.collection'
import { migrations } from './migrations'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: userCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    idType: 'uuid',
    prodMigrations: migrations,
    push: false,
    pool: {
      connectionString: process.env.DATABASE_URL ?? '',
    },
  }),
  sharp,
  plugins: [],
})
