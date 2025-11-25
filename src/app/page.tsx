"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function HomePage() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const testAi = useMutation(trpc.testAi.mutationOptions());

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
      },
    })
  );

  return (
    <div className="font-bold">
      User object
      {JSON.stringify(data, null, 2)}
      <div>
        <Button disabled={create.isPending} onClick={() => create.mutate()}>
          Create workflow
        </Button>
        <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
          Test AI
        </Button>
      </div>
    </div>
  );
}
