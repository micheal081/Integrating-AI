import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  // Add your OPENAI secret key here
  apiKey: process.env.SECRET_KEY,
});

const openai = new OpenAIApi(config);

const runPrompt = async () => {
  const prompt = "Tell me a joke about Backend developers";

  const response = await openai.createCompletion({
    model: "gpt-3.5-turbo-0613",
    prompt: prompt,
    max_tokens: 2048,
    temperature: 0.5,
  });
};
