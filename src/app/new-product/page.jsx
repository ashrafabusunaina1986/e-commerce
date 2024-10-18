import NewProductS from "@/components/new-product-s";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function NewProdectPage() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  return <NewProductS user={JSON.parse(JSON.stringify(user))} />;
}

export default NewProdectPage;
