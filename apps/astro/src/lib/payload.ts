import process from 'node:process'

/**
 * Returns the shared Payload instance for Astro server routes and pages.
 *
 * This function must only be called from Astro server code. It throws before
 * loading any server dependencies if it is called from a client bundle.
 */
export async function getLocalPayload() {
  if (!import.meta.env.SSR) {
    throw new Error(
      'getLocalPayload() is server-only and cannot be called from client-side code.',
    )
  }

  const [{ default: path }, { config: loadEnv }] = await Promise.all([
    import('node:path'),
    import('dotenv'),
  ])

  // Astro runs from apps/astro, while the shared Payload configuration expects
  // its variables in process.env. Values supplied by the host take precedence.
  loadEnv({
    path: path.resolve(process.cwd(), '../payload/.env'),
    quiet: true,
  })

  const [{ getPayload }, { default: config }] = await Promise.all([
    import('payload'),
    import('../../../payload/src/payload.config'),
  ])

  return getPayload({ config })
}
