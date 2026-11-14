# OSS Week 11 — React Course Manager (Student Starter)

React + Vite 기반 학생 배포용 Sample Project입니다. **조회와 삭제는 완성**, 등록 및 완료 변경은 학생이 직접 구현하도록 `TODO`로 남겨두었습니다.

## 실행 방법

Node.js 20.19+ 또는 22.12+ 권장.

```bash
npm install
npm run dev
```

브라우저에 표시되는 Local URL에 접속하세요. 빌드 테스트: `npm run build`.

## 소스 구조

- `src/App.jsx`: 페이지 전체 레이아웃
- `src/components/CourseList.jsx`: State 및 목록, 삭제 로직, **TODO 1/2**
- `src/components/CourseItem.jsx`: Props로 데이터를 받고 이벤트 콜백 호출
- `src/data/courses.js`: 초기 과목 데이터
- `src/App.css`: 전체 디자인

## 수행 내용

1. 코드를 실행하고 목록 조회·삭제를 확인합니다.
2. 초기 과목 5개 이상, 제목, CSS 3곳 이상 변경합니다.
3. `CourseList.jsx`의 **TODO 1**: 과목 등록 (빈 값 입력 방지, 고유 id 지정, State 업데이트).
4. `CourseList.jsx`의 **TODO 2**: 완료 체크박스 클릭 시 `completed` 상태 변경.
5. 선택: 검색/필터, 이름 수정 기능 추가.
6. GitHub에 Commit/Push 후 Vercel에 배포합니다.
7. README에 프로젝트 소개, 주요 코드 분석 2개, 변경 내용, Weekly Review, GitHub URL, Vercel URL을 정리합니다.

## 확인할 질문

- `CourseList`와 `CourseItem`의 역할은?
- 왜 `courses`를 직접 수정하지 않고 `setCourses()`를 사용할까요?
- `map()`과 `filter()`는 각각 어떤 목적인가요?
- `course`, `onDelete`, `onToggle` Props는 어디에서 전달되나요?
- 브라우저 새로고침 시 데이터가 초기화되는 이유는? (DB/localStorage 없음)

> 교육 목적의 로컬 State 앱입니다. 서버 API 및 데이터베이스는 사용하지 않습니다.

## Step2: Source Code Exploration

1. Project Structure: 주요 파일 3개의 역할
    - CourseList.jsx : 초기 배열을 useState로 관리하고 handleDelete가 삭제 기능을 한다. 그리고 map으로 CourseItem를 반복해서 그린다.
    - CourseItem.jsx : 과목 하나를 그린다.
    - courses.js : 초기 데이터를 저장한다.
2. Component & Props: CourseList와 CourseItem의 관계 및 Props 전달 방식
CourseList가 CourseItem의 부모 컴포넌트로 CourseList에서 map으로 CourseItem을 하나씩 불러와 과목을 하나씩 그리게 한다. CourseItem은 props로 course, onDelete, onToggle 이렇게 데이터와 함수를 받게 된다.
3. State & Event: useState를 이용한 상태 관리 및 삭제 버튼의 동작 원리
useState는 초기에 courses라는 지금 상태값을 만들어서 initialCourses를 처음 값으로 넣어두고 setCourses로 그 값을 바꾸는 함수를 만들어서 이 함수가 실행될때마다 react가 바뀐 값을 화면에 실행되도록 한다.
클릭하게 되면 onDelete가 실행되고 handleDelete함수로 인해 setCourses함수가 실행되어 자료 값이 바뀌고 화면이 갱신된다.
4. Code Analysis: 주요 코드 2개(각 5~15줄)를 선택하여 동작 원리 설명
```jsx
// [제공] 초기 배열을 useState로 관리합니다.
  const [courses, setCourses] = useState(initialCourses);
  const [newName, setNewName] = useState('');

  // [제공] 삭제 기능: filter로 새 배열을 만들어 업데이트합니다.
  function handleDelete(id) {
    if (!window.confirm('이 과목을 삭제하시겠습니까?')) return;
    setCourses(previous => previous.filter(course => course.id !== id));
  } 
  ```
- useState는 자료의 처음상태를 저장하고 값을 바꾸는 함수도 생성하는 역할을 한다.
- filter로 삭제하지 않을 데이터만 골라서 새 배열을 만든다.
- previous로 변경되기 전의 현재 과목 목록을 받는다.

```jsx
<button
    className="btn danger"
    type="button"
    onClick={() => onDelete(course.id)}
    >
    Delete
    </button>
```
onClick로 onDelete를 course.id와 함께 불러서 해당 아이디를 삭제하도록 하였다.

## Step3: Customizing
- 과목 5개 변경: courses.js에서 과목 5개로 조건에 맞게 변경
Programming Studio → Computer Architecture
Coding Studio → Calculus II
Web Service Development → Discrete Mathematics
Software Engineering → Introduction to AI Convergence
- 제목·설명 변경: App.jsx와 index.html에서 바꿨다.
OPEN SOURCE STUDIO · WEEK 11 → 26-2 My Course Manager · WEEK 11
React Component, Props & State Practice → 26-2학기 수업 관리 프로그램
OSS Week 11 · React → 26-2 My Course Manager · WEEK 11
OSS Course Manager → 26-2 My Course Manager
- CSS 3곳 변경: App.css에서 바꿨다.
.hero h1 글자 크기: clamp(30px,4vw,44px) → clamp(40px,4vw,44px)
.stat strong.green 색: #16856c → #19b792
.panel 모서리: 18px → 20px