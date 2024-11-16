import React, { useState } from "react";
import { generateText } from "../services/openai-request"; // OpenAI API 함수 불러오기

function AIComponent() {
  const [response, setResponse] = useState("");

  const handleRequest = async () => {
    const result = await generateText("Tell me a joke about AI.");
    setResponse(result);
  };

  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <button
        onClick={handleRequest}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Get AI Response
      </button>
      {response && (
        <p style={{ marginTop: "1.5rem", fontSize: "1.25rem", color: "#333" }}>
          {response}
        </p>
      )}
    </div>
  );
}

export default AIComponent;
