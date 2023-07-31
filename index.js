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
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 3000,
    temperature: 1,
  });

  console.log(response.data);
};

runPrompt();
