import WebSocket from "ws";
import dotenv from "dotenv";

// 환경 변수 로드
dotenv.config();

// WebSocket 연결 URL 및 헤더
const url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-10-01";
const ws = new WebSocket(url, {
    headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, // 환경 변수에서 API 키 가져오기
        "OpenAI-Beta": "realtime=v1", // OpenAI Realtime Beta 사용
    },
});

// WebSocket 연결 이벤트 핸들러
ws.on("open", function open() {
    console.log("Connected to OpenAI Realtime API.");

    // 초기 메시지 전송
    ws.send(
        JSON.stringify({
            type: "response.create",
            response: {
                modalities: ["text"], // 텍스트 기반 응답 요청
                instructions: "Please assist the user.", // 요청 내용
            },
        })
    );
});

// 서버로부터의 메시지 처리
ws.on("message", function incoming(message) {
    try {
        const parsedMessage = JSON.parse(message.toString());
        console.log("Received message:", parsedMessage);

        // 특정 응답 처리
        if (parsedMessage.type === "response") {
            console.log("AI Response:", parsedMessage.response.content);
        }
    } catch (error) {
        console.error("Error parsing message:", error);
    }
});

// WebSocket 오류 처리
ws.on("error", function error(err) {
    console.error("WebSocket error:", err);
});

// WebSocket 연결 종료 처리
ws.on("close", function close() {
    console.log("WebSocket connection closed.");
});
