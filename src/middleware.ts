import { authMiddleware } from "@clerk/nextjs";
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/"],
  debug: true,
  ignoredRoutes: '/bob'
});




export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};