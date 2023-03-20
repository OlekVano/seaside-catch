import { createClient } from 'contentful'
import { Content } from './types'

export default function useContentful() {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_TOKEN,
    host: import.meta.env.VITE_CONTENTFUL_HOST
  })

  async function getContent() {
    try {
      const homepage = await client.getEntry(import.meta.env.VITE_CONTENTFUL_HOMEPAGE_ID)
      const menu = await client.getEntry(import.meta.env.VITE_CONTENTFUL_MENU_ID)
      const footer = await client.getEntry(import.meta.env.VITE_CONTENTFUL_FOOTER_ID)
      return {
        homepage: Object.fromEntries(Object.entries(homepage.fields as Object).map(sanitizeEntry)),
        menu: Object.fromEntries(Object.entries(menu.fields as Object).map(sanitizeEntry)),
        footer: Object.fromEntries(Object.entries(footer.fields as Object).map(sanitizeEntry))
      } as Content
    }
    catch (err) {
      console.log(`Error fetching homepage: ${err}`)
    }
  }

  return {
    getContent
  }

  // ****************************

  function sanitizeEntry(entry: any) {
    if (entry[1].fields) {
      entry[1] = `https:${entry[1].fields.file.url}`
    }
    return entry
  }
}