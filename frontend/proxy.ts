import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production"
const ADMIN_ROUTES = ["/admin"]

export function proxy(request: NextRequest) {
  // Check if the request is for an admin route
  const isAdminRoute = ADMIN_ROUTES.some((route) => request.nextUrl.pathname.startsWith(route))

  if (isAdminRoute) {
    const token = request.cookies.get("adminToken")?.value

    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { role: string }

      // Check if user is admin
      if (decoded.role !== "admin") {
        return NextResponse.redirect(new URL("/admin/login", request.url))
      }

      return NextResponse.next()
    } catch (error) {
      // Token is invalid or expired
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
