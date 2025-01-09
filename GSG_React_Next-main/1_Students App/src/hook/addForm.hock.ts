import { useState } from "react";
import { IStudent } from "../types";
import { validateStudent } from '../utils/validation';
const INITIAL_STUDENT = { age: 0, coursesList: [], id: '', isGraduated: false, name: '', absents: 0 };
const useAddForm = (onSubmit: (std: IStudent) => void)  => {
    const [student, setStudent] = useState<IStudent>(INITIAL_STUDENT);
    const [isOpen, setIsOpen] = useState(false);
    const [errorsList, setErrorsList] = useState<string[]>([]);
    const handleChange = (field: string, value: any) => {
        setStudent({ ...student, [field]: value });
    };
    const handleSubmit = () => {
        const newStudent: IStudent = { ...student, id: Date.now().toString() };
        const errors = validateStudent(newStudent);
        if (errors.length > 0) {
            setErrorsList(errors);
        } else {
            setErrorsList([]);
            onSubmit(newStudent);
            handleClear();
        }
    };
    const handleClear = () => {
        setStudent(INITIAL_STUDENT);
    };
    const handleCoursesChange = (list: string[]) => {
        setStudent({ ...student, coursesList: list });
    };
    const handelisOpen = () => {
        setIsOpen((prev) => !prev);
    console.log("Form is now", !isOpen ? "open" : "closed");
  };
    return { 
        isOpen,
        student,
        errorsList,
        handleChange,
        handleSubmit ,
        handleCoursesChange ,
        handleClear ,
        handelisOpen 
    }
}
export default useAddForm ; 