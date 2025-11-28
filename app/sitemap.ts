// app/sitemap.ts
import type { MetadataRoute } from 'next'

// Force static generation
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.happy-dog-belfort.fr'
  const lastmod = new Date().toISOString()

  return [
    {
      url: `${baseUrl}/`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/produits/`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales/`,
      lastModified: lastmod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
