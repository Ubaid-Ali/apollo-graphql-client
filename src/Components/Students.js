import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './App.css'


const GET_STUDENTS = gql`
    query GetAllStudents {
        students {
            name,
            age,
            email,
            id
        }
    }
`;


const Students = () => {

    const { loading, error, data } = useQuery(GET_STUDENTS);

    if (loading) return <h4>Loading...</h4>
    if (error) return <h4>Error</h4>

    const { students } = data;
    // console.log('students', students)

    return (
        <div>
            <table>
                <thead>
                    <tr className="tr">
                        <th className='td' >NAME</th>
                        <th className='td' >AGE</th>
                        <th className='td' >EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((std) => {
                        return (
                            <tr key={std.id} className="tr" >
                                <td className='td' >{std.name}</td>
                                <td className='td' >{std.age}</td>
                                <td className='td' >{std.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr className="tr">
                        <td colSpan="3" className='td' >End</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Students
