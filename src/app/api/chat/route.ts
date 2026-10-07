import Groq from "groq-sdk";
import { NextResponse } from "next/server";

import { portfolioContext } from "@/lib/portfolio-context";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        {
          message: "AI service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const body = await request.json();

    const messages = body.messages as IncomingMessage[];

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        {
          message: "Invalid conversation.",
        },
        {
          status: 400,
        },
      );
    }

    const safeMessages = messages
      .filter(
        (message) =>
          message &&
          (message.role === "user" ||
            message.role === "assistant") &&
          typeof message.content === "string",
      )
      .slice(-10)
      .map((message) => ({
        role: message.role,
        content: message.content.slice(0, 2000),
      }));

    const completion =
      await groq.chat.completions.create({
        model:
          process.env.GROQ_MODEL ||
          "openai/gpt-oss-120b",

        messages: [
          {
            role: "system",
            content: portfolioContext,
          },

          ...safeMessages,
        ],

        temperature: 0.4,

        max_completion_tokens: 450,
      });

    const reply =
      completion.choices[0]?.message?.content?.trim();

    if (!reply) {
      throw new Error("Empty response from AI");
    }

    return NextResponse.json({
      message: reply,
    });
  } catch (error) {
    console.error("Portfolio AI error:", error);

    return NextResponse.json(
      {
        message:
          "The portfolio assistant is temporarily unavailable.",
      },
      {
        status: 500,
      },
    );
  }
}