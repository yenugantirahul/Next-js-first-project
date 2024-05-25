import { createPost } from "@/actions/actions";
import Form from "@/components/form";
import {
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">Create post</h1>

      <Form />
      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
