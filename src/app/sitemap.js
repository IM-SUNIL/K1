import { packages } from '@/data/packages';

export default function sitemap() {
  const baseUrl = 'https://katratravels.in';

  // Base static routes
  const routes = ['', '/packages', '/destinations', '/gallery', '/contact', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic package routes
  const packageRoutes = Object.keys(packages).map((slug) => ({
    url: `${baseUrl}/packages/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...routes, ...packageRoutes];
}
