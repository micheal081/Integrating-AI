import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  // Add your OPENAI secret key here
  apiKey: process.env.SECRET_KEY,
});

const openai = new OpenAIApi(config);

const format = `
    Return response in the following parsable JSON format:
    {
        "Q": "question",
        "A": "answer",
    }
`;

const runPrompt = async () => {
  const prompt = `
    Tell me a joke about Backend developers.
    ${format}
  `;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 3000,
    temperature: 0.5,
  });

  const parsableJSONResponse = response.data.choices[0].text;
  const parsedResponse = JSON.parse(parsableJSONResponse);

  console.log("Question: ", parsedResponse.Q);
  console.log("Answer: ", parsedResponse.A);
};

runPrompt();
