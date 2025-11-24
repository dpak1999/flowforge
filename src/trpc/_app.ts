import prisma from "@/lib/db";
import { baseProcedure, createTRPCRouter } from "./init";

export const appRouter = createTRPCRouter({
  getPosts: baseProcedure.query(() => { return prisma.post.findMany() })
});

export type AppRouter = typeof appRouter;
