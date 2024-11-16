// AI 추천 컴포넌트
// 임시적으로 미리 코딩을 해놨습니다. 수정해야해요...........
// 금요일에 미리미리 해놓으려고 하다가 그냥 CRUD 필요해서 만드능거에요......... 주석 필요하면 말씀주세요 사랑해요 여러분

import React, { useState } from "react";
import { fetchRecommendation } from "../services/api";

function AIRecommendation() {
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  const handleFetch = async () => {
    setLoading(true); // 로딩 시작
    const result = await fetchRecommendation("gpt");
    setRecommendation(result);
    setLoading(false); // 로딩 종료
  };

  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <button
        onClick={handleFetch}
        disabled={loading} // 로딩 중에는 버튼 비활성화
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: loading ? "#ccc" : "#007bff",
          border: "none",
          borderRadius: "4px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "추천 생성 중..." : "오늘의 AI 추천 개그"}
      </button>
      {recommendation && (
        <p style={{ marginTop: "1.5rem", fontSize: "1.25rem", color: "#333" }}>
          {recommendation}
        </p>
      )}
    </div>
  );
}

export default AIRecommendation;
