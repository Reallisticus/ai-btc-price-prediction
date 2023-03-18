import { Dispatch, SetStateAction, useState } from "react";
import { z } from "zod";
import { env } from "~/env.mjs";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { MarketDataWrapperOrError } from "~/utils/marketDataSchemas.zod";
import { Configuration, OpenAIApi } from "openai";

function OpenAIHandler() {
  const configuration = new Configuration({
    apiKey: env.CHATGPT3_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  return openai;
}

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  gpt3: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    const openai = OpenAIHandler();

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      temperature: 0.3,
      max_tokens: 1500,
      n: 1,
      stop: ["stop"],
    });

    if (
      typeof response !== "undefined" &&
      response.data !== undefined &&
      response.data.choices !== undefined &&
      response.data.choices[0] !== undefined
    ) {
      return response.data.choices[0].text;
    }
  }),
});
