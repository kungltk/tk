import React, { useState } from 'react';
import Student from './Student';
const StudentLists = () => {
    const [studentsState, setStudentState] = useState (
        {
            students : [
                {id:1, name:'Jeerawuth'},
                {id:2, name:'Worrawan'},
                {id:3, name:'Thammask'},
                {id:4, name:'Sombat'},
                {id:5, name:'Namcha'},
                {id:6, name:'Somboon'}
            ]
        }
    )
    const deleteItemHandler = (deleteIndex) => {
        const data = [...studentsState.students];
        data.splice(deleteIndex, 1);
        setStudentState({
            students : data
        });
    }

    return (
        <div className="row">
            {studentsState.students.map((item, index) => {
                return (
                    <div key={item.id} className="col-lg-3 col-sm-4 mt-2">
                        <Student 
                            data = {item}
                            deleteStudent = {deleteItemHandler.bind(this, index)}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default StudentLists;