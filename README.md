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

## 🔧 Git Push 충돌 해결법

> 원격 저장소에 커밋이 있어서 push가 안 될 경우 아래 명령어로 해결할 수 있습니다:

```bash
✅ pull 해서 병합하고 push
git pull origin main --rebase
git push origin main
```

💡 --rebase를 사용하면 커밋 히스토리를 더 깔끔하게 유지할 수 있습니다.

---

## 🔁 실행 방법

### 1. 백엔드 실행

```bash
cd boot-backend
./gradlew bootRun
```

- 기본 포트: `http://localhost:8383`  
- Swagger 또는 `/api/books` 엔드포인트로 API 확인 가능

- 기본 포트: `http://localhost:5173`  
- Vite 개발 서버로 실행  
- `/api` 경로는 프록시 설정을 통해 `http://localhost:8383`로 요청 전달

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
| 2025.06.26~| [React 비동기 fetch & 상태관리 구현](https://iridescent-breakfast-50b.notion.site/2025-06-27-REACT-vite-sts-21f75f0fde6c8096bae5d5fb154ac6d3?source=copy_link)                                                 |
| 2025.06.27~| [React + Axios를 활용한 도서 상세 조회 및 수정 처리](https://iridescent-breakfast-50b.notion.site/2025-06-28-REACT-vite-sts-21f75f0fde6c80a9bf6ef4ec7874bc23?source=copy_link)                                                 |
| 2025.06.28~| [React + Axios를 활용한 도서 삭제처리](https://iridescent-breakfast-50b.notion.site/2025-06-29-REACT-vite-sts-1-22375f0fde6c807194d3f85981ff95e4?source=copy_link)                                                 |







<details>
<summary>📌 2025.06.27 작업 요약 및 이해 정리</summary>

### ✅ 오늘 작업 요약
- 전체 React 프론트 구조 구성
- `fetch`를 통해 백엔드 API 연동
- `res`로 결과 받아 `useState`로 상태 관리
- `useEffect`로 생명주기 흐름 확인
- StrictMode로 인한 이펙트 두 번 실행 현상 확인
- 라우팅 설정 및 페이지 분리 작업

---

### 🧠 내가 이해한 개념

#### 🔁 useEffect
- 렌더링 이후 실행되는 hook
- 의존성 배열 사용 시 제어 가능

#### 💾 useState
- 상태 저장 및 리렌더링 유도

#### 🌐 fetch + res.json()
```js
const res = await fetch('/api/books');
const data = await res.json();
```
⚠️ useEffect 두 번 실행되는 이유
React 개발환경에서 StrictMode가 감싸고 있어 의도적으로 두 번 실행

🗺️ React Router 사용
Route, Routes로 경로 분리, 컴포넌트 구성

</details>


<details>
<summary>📌 2025.06.30 작업 요약 및 이해 정리</summary>

### ✅ 오늘 작업 요약
- React에서 책 상세 조회 및 수정 기능 구현 완료
- `useParams`를 활용해 `id` 기반 도서 조회
- `useEffect`로 페이지 진입 시 데이터 불러오기
- Axios를 통한 GET 및 PUT 요청 처리
- `useState`로 폼 입력 상태 관리
- 수정 완료 시 `useNavigate`로 홈(`/`) 이동
- 커밋 메시지 및 문서 제목 깔끔하게 정리

---

### 🧠 내가 이해한 개념

#### 🔍 useParams
- React Router의 훅
- URL에 포함된 파라미터 추출
```js
const { id } = useParams(); // /update/3 → id = 3



🌀 useEffect + Axios
컴포넌트 마운트 시 GET 요청 수행

```bash
useEffect(() => {
  Axios.get(`http://localhost:8383/book/${id}`)
    .then((res) => setBook(res.data))
    .catch((err) => console.error(err));
}, []);
```

💾 useState
상태 기반 렌더링 처리

```bash
const [book, setBook] = useState({ title: "", author: "" });
```

📤 Axios PUT 요청
수정 완료 시 서버에 데이터 전송

```bash
Axios.put(`http://localhost:8383/book/${id}`, book);
```


🧭 useNavigate
수정 성공 시 홈으로 리디렉션

```bash
navigate('/');
```


⚠️ 에러 트러블슈팅
submitBook is not defined 오류: 함수 주석 해제 필요

Axios.get(url, book) 잘못된 인자 → 두 번째 인자 제거

</details> 


<details>
<summary>📌 2025.06.30 작업 요약 및 이해 정리</summary>

### ✅ 오늘 작업 요약
- React에서 책 삭제 기능 구현 완료
- Axios를 활용해 DELETE 요청 처리
- 삭제 성공 시 알림 후 페이지 이동 처리
- 버튼 클릭 이벤트와 함수 연결 완료

---

### 🧠 내가 이해한 개념

#### 🔥 DELETE 요청 처리 (Axios)
- `Axios.delete(url)` 로 서버에 삭제 요청 전송
- 요청 성공 시 `then` 블록에서 후속 작업 수행
- 요청 실패 시 `catch` 블록에서 오류 처리

```js
Axios.delete("http://localhost:8383/book/" + id)
  .then(response => {
    if (response != null) {
      alert("책 삭제에 성공했습니다");
      navigate("/" + id); // 삭제 성공 후 리다이렉트
    } else {
      alert("책 삭제에 실패했습니다");
    }
  })
  .catch(error => {
    console.error("Request failed:", error);
    alert("예외 처리가 발생했습니다");
  });
```

🔘 버튼 이벤트 연결
<Button> 컴포넌트에 onClick 이벤트로 삭제 함수 연결

클릭 시 deleteBook 함수 실행

```bash
<Button variant="danger" onClick={deleteBook}>삭제</Button>

```


⚠️ 참고 사항
navigate 함수는 React Router의 useNavigate 훅으로 선언 필요

삭제 성공 후 리다이렉트 경로는 요구사항에 맞게 조정 가능

응답이 null이 아닐 때 성공 처리하도록 조건문 작성
</details>


> 💡 Notion 링크는 매일 기록용으로 업데이트되며, React 학습 흐름 및 오류 해결 로그 등을 정리합니다.

---

## 📝 참고

- 이 프로젝트는 개인 실습용으로 제작되었으며,  
  풀스택 구조 및 클라이언트-서버 연동의 기본기를 익히는 데 목적이 있습니다.

---






