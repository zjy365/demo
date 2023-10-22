import tunnel from "tunnel";

const agent = tunnel.httpsOverHttp({
  proxy: {
    host: "127.0.0.1",
    port: 7890,
  },
});

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  httpAgent: agent,
});

// export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  console.log(messages);

  // Create a chat completion using OpenAI
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  // Transform the response into a readable stream
  const stream = OpenAIStream(response);

  // Return a StreamingTextResponse, which can be consumed by the client
  return new StreamingTextResponse(stream);
}
