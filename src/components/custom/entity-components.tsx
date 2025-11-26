import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import type { ReactNode } from "react";

type EntityHeaderProps = {
  title: string;
  description?: string;
  newButtonLabel: string;
  disabled?: boolean;
  isCreating?: boolean;
} & (
  | { onNew: () => void; newButtonHref?: never }
  | { newButtonHref: string; onNew?: never }
  | { newButtonHref?: never; onNew?: never }
);

type EntitycontainerProps = {
  children: ReactNode;
  header?: ReactNode;
  search?: ReactNode;
  pagination?: ReactNode;
};

export const EntityHeader = ({
  title,
  description,
  disabled,
  isCreating,
  newButtonLabel,
  newButtonHref,
  onNew,
}: EntityHeaderProps) => {
  return (
    <div className="flex flex-row items-center justify-between gap-x-4">
      <div className="fle flex-col">
        <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
        {description && (
          <p className="text-xs md:text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {onNew && !newButtonHref && (
        <Button disabled={disabled || isCreating} size={"sm"} onClick={onNew}>
          <PlusIcon className="size-4" />
          {newButtonLabel}
        </Button>
      )}

      {!onNew && newButtonHref && (
        <Button size={"sm"} asChild>
          <Link href={newButtonHref} prefetch></Link>
          <PlusIcon className="size-4" />
          {newButtonLabel}
        </Button>
      )}
    </div>
  );
};

export const Entitycontainer = ({
  children,
  header,
  pagination,
  search,
}: EntitycontainerProps) => {
  return (
    <div className="p-4 md:px-10 md:py-6 h-full">
      <div className="mx-auto max-w-svw w-full flex flex-col gap-y-8 h-full">
        {header}

        <div className="flex flex-col gap-y-4 h-full">
          {search}
          {children}
        </div>

        {pagination}
      </div>
    </div>
  );
};
