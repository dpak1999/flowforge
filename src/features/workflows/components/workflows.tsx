"use client";

import {
  Entitycontainer,
  EntityHeader,
} from "@/components/custom/entity-components";
import {
  useCreateWorkflow,
  useSuspenseWorkflows,
} from "../hooks/use-workflows";
import type { ReactNode } from "react";

export const WorkflowsList = () => {
  const workflows = useSuspenseWorkflows();

  return <p>{JSON.stringify(workflows.data, null, 2)}</p>;
};

export const WorkflowsHeader = ({ disabled }: { disabled?: boolean }) => {
  const createWorkflow = useCreateWorkflow();

  const handleCreate = () => {
    createWorkflow.mutate(undefined, {
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <EntityHeader
      title="Workflows"
      description="Create and manage your workflows"
      onNew={handleCreate}
      newButtonLabel="New workflow"
      disabled={disabled}
      isCreating={createWorkflow.isPending}
    />
  );
};

export const WorkflowsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Entitycontainer
      search={<></>}
      pagination={<></>}
      header={<WorkflowsHeader />}
    >
      {children}
    </Entitycontainer>
  );
};
