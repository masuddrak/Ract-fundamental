import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <StudentCard></StudentCard>
      <StudentCard></StudentCard>
      <br />
      <TeacherCard></TeacherCard>
      <TeacherCard></TeacherCard>
    </div>
  );
}
function StudentCard() {
  return (
    <div className='student'>
      <p>Student</p>
      <h1>Name: Sakibal Hassan</h1>
      <h3>Roll:222</h3>
    </div>
  );
}
function TeacherCard() {
  return (
    <div className='teacher'>
      <p>Teacher</p>
      <h1>Name: Azad Rohoman</h1>
      <h3>ID:400</h3>
    </div>
  );
}

export default App;
