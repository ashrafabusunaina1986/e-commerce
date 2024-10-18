import { cookies } from "next/headers";
import { NextResponse, userAgent } from "next/server";
import jwt from "jsonwebtoken";

export const GET = async (req) => {
  const u = userAgent(req);
  const token = jwt.sign(u, "12345677890,");
  cookies().set("adds-shop", token);
  return NextResponse.json(
    {
      u,
      cookie: cookies().get("adds-shop"),
      addCart: `${u.browser.name}/${cookies().get("adds-shop").value}`,
    },
    { status: 201 }
  );
};
