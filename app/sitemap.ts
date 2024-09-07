import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.shadmanwadith.xyz/',
      lastModified: new Date()
    },
    {
      url: 'https://www.shadmanwadith.xyz/about',
      lastModified: new Date()
    },
  ]
}