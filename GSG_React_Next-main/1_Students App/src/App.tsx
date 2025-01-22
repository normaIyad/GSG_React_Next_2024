import { useState, useEffect, useReducer } from 'react';
import './App.css'
import { IStudent } from './types';
import Student from './components/student/student.component';
import AddForm from './components/add-form/add-form.component';
import useLocalStorage from './hooks/local-storage.hook';
import  reducer  from "./state/Reducer";
function App() {
  const [studentsList, setStudentsList] = useState<IStudent[]>([]);
  const { storedData } = useLocalStorage(studentsList, 'students-list');
  const initialState = {
    students: storedData || [],
    totalAbsents: storedData?.reduce((prev:number, cur:IStudent) => prev + (cur.absents || 0), 0) || 0,
    change: 0,
    id: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
    setStudentsList(stdList);
  }, [storedData]);

  const removeFirst = () => {
   dispatch({
     type: 'REMIVE_FIRST'
   })
  }

  const handleAbsentChange = (id: string, change: number) => {
    dispatch({
      type: change > 0 ? 'IncrementAbsents' : 'DecrementAbsents',
      payload: { id, change },
    });
  }
  const handleResetAbsent = (id: string , change:number) => {
    dispatch({ type: 'ResetAbsents', payload: {id , change} });
  }
  const handleAddStudent = (newStudent: IStudent) => {
    dispatch({ type: 'ADD_STUDENT', payload: newStudent})
  }

  const h1Style = { color: '#69247C', fontSize: '24px' };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <AddForm className="addForm" onSubmit={handleAddStudent} />
      <div className='stats'>
        <button onClick={removeFirst}>POP Student</button>
        <b style={{ fontSize: '12px', fontWeight: 100, color: 'gray' }}>Total Absents {state.totalAbsents}</b>
      </div>
      {
        studentsList.map(student => (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            age={student.age}
            absents={student.absents}
            isGraduated={student.isGraduated}
            coursesList={student.coursesList}
            onAbsentChange={handleAbsentChange}
            onResetAbsent={handleResetAbsent}
          />
        )
        )
      }
    </div>
  )
}

export default App;