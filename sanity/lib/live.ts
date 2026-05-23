// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
// Note: "next-sanity/live" requires next-sanity v9+. Stubbed for now.
import { client } from './client'

export const sanityFetch = client.fetch.bind(client)
export const SanityLive = () => null
