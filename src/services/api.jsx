//api 호출 및 기타 비즈니스  로직 폴더
// API 호출 관련 로직(axios 설정 및 요청 함수 작성예정)

// 임시적으로 미리 코딩을 해놨습니다. 수정해야해요...........
// 금요일에 미리미리 해놓으려고 하다가 그냥 CRUD 필요해서 만드능거에요......... 주석 필요하면 말씀주세요 사랑해요 여러분

import axios from "axios";

const OPENAI_API_URL = "https://api.openai.com/v1/completions";
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // 환경 변수에서 API 키 가져오기

export const fetchGPTRecommendation = async () => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "text-davinci-003",
        prompt: "오늘의 재미있는 아재개그를 추천해주세요!",
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error fetching GPT recommendation:", error);
    return "추천을 가져오는 데 실패했습니다.";
  }
};
