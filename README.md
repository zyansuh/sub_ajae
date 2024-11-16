src/
├── components/                # 재사용 가능한 공통 컴포넌트를 관리하는 디렉토리
│   ├── Header/                # 헤더 컴포넌트를 관리하는 디렉토리
│   │   ├── Header.jsx         # 헤더 컴포넌트의 구조와 로직
│   │   └── Header.styles.js   # 헤더 컴포넌트의 스타일링 (styled-components 사용)
│   ├── Footer/                # 푸터 컴포넌트를 관리하는 디렉토리
│   │   ├── Footer.jsx         # 푸터 컴포넌트의 구조와 로직
│   │   └── Footer.styles.js   # 푸터 컴포넌트의 스타일링 (styled-components 사용)
│   ├── AIRecommendation/      # AI 추천 개그 컴포넌트를 관리하는 디렉토리
│   │   ├── AIRecommendation.jsx # AI 추천 버튼 및 결과 렌더링 로직
│   │   └── AIRecommendation.styles.js # AI 추천 컴포넌트의 스타일링
│   ├── JokesList/             # 개그 목록 컴포넌트를 관리하는 디렉토리
│   │   ├── JokesList.jsx      # 개그 카드 목록을 렌더링하는 컴포넌트
│   │   └── JokesList.styles.js # 개그 목록 스타일링
│   └── JokeCard/              # 개별 개그 카드를 관리하는 디렉토리
│       ├── JokeCard.jsx       # 개별 개그 카드의 구조와 로직
│       └── JokeCard.styles.js # 개별 개그 카드의 스타일링
│
├── pages/                     # 페이지 단위 컴포넌트를 관리하는 디렉토리
│   ├── HomePage.jsx           # 메인 페이지 컴포넌트 (홈 화면)
│   ├── LoginPage.jsx          # 로그인 페이지 컴포넌트
│   ├── DetailPage.jsx         # 개별 개그의 상세 내용을 보여주는 페이지
│   ├── MyPage.jsx             # 사용자 정보 및 활동을 보여주는 마이페이지
│   └── WritePage.jsx          # 개그 작성 및 수정/삭제 페이지
│
├── services/                  # API 호출 및 비즈니스 로직을 관리하는 디렉토리
│   └── api.js                 # API 요청 관련 함수 정의 (e.g., fetchAIRecommendation)
├── App.jsx                    # 애플리케이션의 메인 컴포넌트, 라우팅 설정 포함
├── index.jsx                  # ReactDOM을 통해 App 컴포넌트를 렌더링하는 진입점
└── index.css                  # 전역 CSS 스타일 정의


.env는 gitinore에 저장해서 개인적으로 만드는게 좋다고 하더라구요?
 => 팀 프로젝트에서도 .env 파일은 반드시 .gitignore에 추가해야 합니다. .env 파일에는 API 키, 데이터베이스 접속 정보, 비밀 키 등 민감한 정보가 저장되기 때문에, GitHub와 같은 공개/공유된 저장소에 업로드되면 보안 문제가 발생할 수 있습니다.
 라고 하더라구요!