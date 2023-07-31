import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.SECRET_KEY,
});

const openai = new OpenAIApi(config);