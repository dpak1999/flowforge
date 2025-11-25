import { caller } from "@/trpc/server";

export default async function HomePage() {
  const data = await caller.getUsers();

  return (
    <div className="font-bold">
      User object
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
