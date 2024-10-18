import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import Header from "../header";

async function CommonLayout({ children }) {
  const user = await currentUser();
  return (
    <div className="flex flex-col px-5 py-2 my-3 w-[98%] mx-auto">
      {/* header */}
      <Header user={JSON.parse(JSON.stringify(user))} />
      {/* main content */}
      <main className="flex items-center justify-center py-10 px-0">
        {children}
      </main>
    </div>
  );
}

export default CommonLayout;
