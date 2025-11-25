import prisma from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "./init";
import { inngest } from "@/inngest/client";
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';


export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(async () => {
    return prisma.workflow.findMany()
  }),

  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: { email: "a@b.com" }
    })
    return prisma.workflow.create({ data: { name: "test-workflow" } })
  }),

  testAi: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    })

    return { success: true, message: "Job queued" }
  })
});

export type AppRouter = typeof appRouter;
