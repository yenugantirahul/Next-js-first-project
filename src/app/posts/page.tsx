import Form from "@/components/form";
import PostList from "@/components/posts-list";
import { Suspense } from "react";

export default async function page() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">All posts</h1>

      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>

      <Form />
    </main>
  );
}
