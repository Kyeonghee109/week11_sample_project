import CourseList from './components/CourseList.jsx';

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">26-2 My Course Manager · WEEK 11</p>
          <h1>My Course Manager</h1>
          <p className="subtitle">26-2학기 수업 관리 프로그램</p>
          </div>
        <span className="tag">STUDENT STARTER</span>
      </header>
      <CourseList />
      <footer className="bottom">
        <span>26-2 My Course Manager · WEEK 11</span>
        <span>Local state only · Refresh resets data</span>
      </footer>
    </main>
  );
}
