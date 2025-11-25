import { inngest } from "@/inngest/client";
import { executeAi } from "@/inngest/functions";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    executeAi
  ],
});