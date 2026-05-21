import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yourProjectId',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-05-21',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient({
  ...sanityConfig,
  useCdn: sanityConfig.useCdn,
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)
