import { inngest } from "./client";
import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from '@ai-sdk/openai';
import { createAnthropic } from '@ai-sdk/anthropic';

const google = createGoogleGenerativeAI()
const openAi = createOpenAI()
const anthropic = createAnthropic()

export const executeAi = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generative-text",
      generateText, {
      system: "You are a masterchef",
      model: google("gemini-2.5-flash"),
      prompt: "Give me a delicious chicken lasgna recipe."
    }
    )

    const { steps: openAiSteps } = await step.ai.wrap(
      "openAI-generative-text",
      generateText, {
      system: "You are a masterchef",
      model: openAi("gpt-4.1-mini"),
      prompt: "Give me a delicious chicken lasgna recipe."
    }
    )

    const { steps: anthropicSteps } = await step.ai.wrap(
      "anthropic-generative-text",
      generateText, {
      system: "You are a masterchef",
      model: anthropic("claude-sonnet-4-0"),
      prompt: "Give me a delicious chicken lasgna recipe."
    }
    )

    return { "gemini": geminiSteps, "OpenAI": openAiSteps, "anthropic": anthropicSteps }
  },
);