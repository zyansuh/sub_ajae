import axios from "axios";
import dotenv from "dotenv";

// .env 파일 로드
dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/completions";

async function generateText(prompt) {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "text-davinci-003", // 사용할 모델
        prompt: prompt,           // 사용자 입력 프롬프트
        max_tokens: 100,          // 응답 최대 길이
        temperature: 0.7,         // 창의성 설정
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    // 응답 텍스트 반환
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error during API call:", error.response?.data || error.message);
    throw new Error("Failed to generate text.");
  }
}

// 테스트 실행
(async () => {
  const prompt = "Tell me a joke about programming.";
  const result = await generateText(prompt);
  console.log("Generated Text:", result);
})();
