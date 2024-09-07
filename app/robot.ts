import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/','/publications','/about'],
      disallow: '/private/',
    },
    sitemap: 'https://shadmanwadith.xyz/sitemap.xml',
  }
}