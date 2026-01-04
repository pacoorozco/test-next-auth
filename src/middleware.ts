export { auth as middleware } from '@/auth';

export const config = {
  // Avoid running middleware on API routes, static assets, robots.txt, and image files.
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
