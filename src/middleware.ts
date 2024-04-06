import { NextRequest, NextResponse } from "next/server";

// // option 1, easier to read
// export default function middleware(req: NextRequest) {
//   if (req.nextUrl.pathname === "/events") {
//     return NextResponse.redirect(new URL("/events/all", req.url));
//   }
// }

//option 2, recommended way especially once more complex
export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/events/all", req.url));
}
export const config = {
  matcher: ["/events"],
};
