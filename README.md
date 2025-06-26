# 📚 Vite Book CRUD (Fullstack Practice)

React + Vite + Spring Boot 기반의 **도서 정보 관리 풀스택 실습 프로젝트**입니다.  
간단한 CRUD 기능을 통해 프론트엔드와 백엔드 간의 연동 구조를 익히는 데 목적이 있습니다.

---

## 🛠️ 기술 스택

### 📘 Frontend (`book-frontend`)
- Vite + React
- React Hooks
- Axios (REST API 통신)
- CSS Module or Tailwind CSS (선택)

### 📕 Backend (`boot-backend`)
- Java 17
- Spring Boot 3
- Spring Web (REST API)
- Spring Data JPA 또는 Repository 기반
- H2 또는 MySQL (DB 설정에 따라 선택)

---

## 🔁 실행 방법

### 1. 백엔드 실행

```bash
cd boot-backend
./gradlew bootRun
```

- 기본 포트: `http://localhost:8080`  
- Swagger 또는 `/api/books` 엔드포인트로 API 확인 가능

- 기본 포트: `http://localhost:5173`  
- Vite 개발 서버로 실행  
- `/api` 경로는 프록시 설정을 통해 `http://localhost:8080`로 요청 전달

---

## 🧾 주요 기능
- 📖 도서 전체 조회  
- 🔍 도서 단건 조회  
- ➕ 도서 등록  
- ❌ 도서 ## 📦 API 명세

| 메서드 | 경로           | 설명         |
|--------|----------------|--------------|
| GET    | /api/books     | 도서 전체 조회 |
| GET    | /api/books/{id}| 도서 상세 조회 |
| POST   | /api/books     | 도서 등록     |
| DELETE | /api/books/{id}| 도서 삭제     |


---

## 📂 디렉토리 구조
```text
vite-book-crud/
├── book-frontend/     # React + Vite 프론트엔드
├── boot-backend/      # Spring Boot 백엔드
├── .gitignore         # node_modules, .metadata 등 제외 설정
└── README.md          # 프로젝트 설명
```

<details> <summary>📌 개발 환경 참고: .metadata 제외 이유</summary>
.metadata/ 디렉토리는 Eclipse/STS의 개인 설정 폴더로
Git에 포함하지 않으며 .gitignore에 명시되어 있습니다.

이 프로젝트는 IDE에 의존하지 않고 실행할 수 있으며,
VSCode, IntelliJ, Eclipse 등에서 자유롭게 개발 가능합니다.
</details>

## 🚀 배포 링크 (추후 업데이트 예정)
- 프론트엔드: [링크 추가 예정]  
- 백엔드 API: [링크 추가 예정]

---

## 📅 React 진행 노트 (Notion)

| 날짜       | 링크                                                          |
|------------|---------------------------------------------------------------|
| 2025.06.25 | [React+vite 백엔드 및 프론트 세팅](https://iridescent-breakfast-50b.notion.site/2025-06-25-REACT-21c75f0fde6c809bb3e8c6dfd51326cf?source=copy_link) |
| 2025.06.26~| (추가 예정)                                                  |

> 💡 Notion 링크는 매일 기록용으로 업데이트되며, React 학습 흐름 및 오류 해결 로그 등을 정리합니다.

---

## 📝 참고

- 이 프로젝트는 개인 실습용으로 제작되었으며,  
  풀스택 구조 및 클라이언트-서버 연동의 기본기를 익히는 데 목적이 있습니다.

---






