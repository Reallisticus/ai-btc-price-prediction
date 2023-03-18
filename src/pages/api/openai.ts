import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { env } from "process";

const configuration = new Configuration({
  apiKey: env.CHATGPT3_API_KEY,
  organization: env.CHATGPT3_API_ORG,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = req.query.prompt as string;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 100,
    stop: ["stop"],
  });

  console.log(response);

  if (response.data.choices[0] !== undefined) {
    res.status(200).json(response.data.choices[0]);
  } else {
    res.status(500).json("Something went wrong");
  }
}
