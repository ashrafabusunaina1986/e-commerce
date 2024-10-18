import { cookies } from "next/headers";
import { NextResponse, userAgent } from "next/server";


export const GET = async (req) => {
  const u = userAgent(req);
  cookies().set("adds-shop", JSON.stringify(u));
  return NextResponse.json(
    {
      u,
      cookie: cookies().get("adds-shop"),
      addCart: `${u.browser.name}/${cookies().get("adds-shop").value}`,
    },
    { status: 201 }
  );
};
