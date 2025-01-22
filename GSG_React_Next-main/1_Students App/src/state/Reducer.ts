import Student from "../components/student/student.component";
import { IStudent } from "../types";

interface Istate {
  students: IStudent[];
  totalAbsents: number;
  change: number;
  id: string;
}

type Action =
  | { type: "IncrementAbsents"; payload:  { id: string; change: number }  }
  | { type: "DecrementAbsents"; payload:  { id: string; change: number }  } 
  | { type: 'ResetAbsents' ; payload: { id: string , change: number } } 
  | { type: 'REMIVE_FIRST' } 
  | { type: 'ADD_STUDENT' ; payload: IStudent } 
const reducer = (state: Istate, action: Action) => {
  switch (action.type) {
    case 'IncrementAbsents': {
        const { id, change } = action.payload;
        return {
          ...state,
          totalAbsents: state.totalAbsents + change,
          students: state.students.map((student) =>
            student.id === id
              ? { ...student, absents: student.absents + change }
              : student
          ),
        };
      }
      case 'DecrementAbsents': {
        const { id, change } = action.payload;
        return {
          ...state,
          totalAbsents: state.totalAbsents + change,
          students: state.students.map((student) =>
            student.id === id
              ? { ...student, absents: student.absents + change }
              : student
          ),
        };
      }
      case 'ResetAbsents' : {
        const { id, change } = action.payload;
        let total = state.totalAbsents - change;
        if(total < 0) total = 0;  // if the total absents are less than 0, reset it to 0
        return {
            ...state,
            students:  state.students.map((student) =>
              student.id === id
                ? { ...student, absents: 0 }
                : student
            ),
            totalAbsents: total
            // state.students.reduce((total, student) => total + (student.absents ), 0),
          };
    }
    case'REMIVE_FIRST': {
      return {
        ...state ,
        students : state.students.slice(1)
      }
    }
    case 'ADD_STUDENT': {
      const newStudent = action.payload;
      return {
       ...state,
        students: [...state.students, newStudent],
      }
    }


    default:
      return state;
  }
};
export default reducer ; 
