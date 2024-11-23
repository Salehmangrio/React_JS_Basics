import React from 'react'
import { Table } from "react-bootstrap"

export default function ListExample() {

    const Students = [
        {
            "name": "Ahmed Ali",
            "university": "Sukkur IBA",
            "department": "Computer Science",
            "subjects": [
                { "name": "Mathematics", "marks": 95, "grade": "A+" },
                { "name": "Physics", "marks": 87, "grade": "A" },
                { "name": "Computer Programming", "marks": 72, "grade": "B" }
            ]
        },
        {
            "name": "Sara Khan",
            "university": "FAST",
            "department": "Software Engineering",
            "subjects": [
                { "name": "Mathematics", "marks": 88, "grade": "A" },
                { "name": "Physics", "marks": 79, "grade": "B" },
                { "name": "Data Structures", "marks": 91, "grade": "A+" }
            ]
        },
        {
            "name": "Bilal Ahmed",
            "university": "Karachi University",
            "department": "Electrical Engineering",
            "subjects": [
                { "name": "Mathematics", "marks": 82, "grade": "A" },
                { "name": "Operating Systems", "marks": 74, "grade": "B" },
                { "name": "Computer Programming", "marks": 89, "grade": "A" }
            ]
        },
        {
            "name": "Zara Sheikh",
            "university": "NED University",
            "department": "Mechanical Engineering",
            "subjects": [
                { "name": "Physics", "marks": 91, "grade": "A+" },
                { "name": "Mathematics", "marks": 67, "grade": "C" },
                { "name": "Data Structures", "marks": 85, "grade": "A" }
            ]
        },
        {
            "name": "Usman Malik",
            "university": "UET Lahore",
            "department": "Computer Science",
            "subjects": [
                { "name": "Operating Systems", "marks": 93, "grade": "A+" },
                { "name": "Mathematics", "marks": 76, "grade": "B" },
                { "name": "Computer Programming", "marks": 88, "grade": "A" }
            ]
        }
    ]

    return (
        <>
            <Table striped variant='dark'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>University</th>
                        <th>Department</th>
                        <th>Subjects</th>
                    </tr>
                    {
                        Students.map(
                            (student,index) => <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.department}</td>
                                <td>{student.university}</td>
                                <td>
                                    <Table striped variant='success'>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Marks</th>
                                                <th>Grade</th>
                                            </tr>
                                            {
                                                student.subjects.map((subject,ind) => <tr key={ind}>
                                                    <td>{subject.name}</td>
                                                    <td>{subject.marks}</td>
                                                    <td>{subject.grade}</td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </Table>


        </>
    )

}