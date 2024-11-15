//api 호출 및 기타 비즈니스  로직 폴더
// API 호출 관련 로직(axios 설정 및 요청 함수 작성예정)

// 임시적으로 미리 코딩을 해놨습니다. 수정해야해요...........
// 금요일에 미리미리 해놓으려고 하다가 그냥 CRUD 필요해서 만드능거에요......... 주석 필요하면 말씀주세요 사랑해요 여러분

import axios from 'axios';

// axios 기본 설정
const api = axios.create({
  baseURL: 'https://api.example.com', // 실제 API URL로 변경하세요
  headers: {
    'Content-Type': 'application/json',
  },
});

// 개그 목록을 가져오는 API 함수
export const fetchJokes = async () => {
  try {
    const response = await api.get('/jokes');
    return response.data;
  } catch (error) {
    console.error('Error fetching jokes:', error);
    throw error;
  }
};

// 다른 API 함수도 추가할 생각있어요.
