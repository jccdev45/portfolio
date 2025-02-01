import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")
  const state = searchParams.get("state")

  if (code && state) {
    // Redirect back to the Expo app
    return NextResponse.redirect(`limechat://auth?code=${code}&state=${state}`)
  } else {
    // Handle error case
    return NextResponse.json(
      { error: "Missing code or state parameter" },
      { status: 400 }
    )
  }
}
