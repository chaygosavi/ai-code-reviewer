import { ChatOllama } from "@langchain/ollama";

const llm = new ChatOllama({
  model: "codellama:7b",
  temperature: 0,
});

const prompt =
  "You are an expert frontend engineer. Review the following code briefly";

async function generateReview(code) {
  const response = await llm.invoke([
    ["system", prompt],
    ["human", code],
  ]);

  return response.content;
}

export default generateReview;
