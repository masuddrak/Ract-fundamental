import logo from './logo.svg';
import './App.css';

function App() {
  const Students=[
    {name:'Sabie',roll:22},
    {name:'Kabil',roll:2},
    {name:'Sadik',roll:12}
  ]
  return (
    <div className="App">
          {
            Students.map(student=><StudentCard name={student.name} roll={student.roll}></StudentCard>)
          }
      <br />
      <TeacherCard name='Dr. SUltan' phone='0179862452'></TeacherCard>
      <TeacherCard name='Dr. Sabrin' phone='017986528'></TeacherCard>
      <TeacherCard name='Dr. Minhaz' phone='0179875667'></TeacherCard>
    </div>
  );
}
function StudentCard(props) {
  console.log(props)
  return (
    <div className='student'>
      <p>Student</p>
      <h1>Name:{props.name}</h1>
      <h3>Roll:{props.roll} </h3>
    </div>
  );
}
function TeacherCard(props) {
  return (
    <div className='teacher'>
      <p>Teacher</p>
      <h1>Name: {props.name}</h1>
      <h3>Phone:{props.phone}</h3>
    </div>
  );
}

export default App;
