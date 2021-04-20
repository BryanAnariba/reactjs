import React from 'react'

export const Courses = ({ course }) => {
    const { courseName, part, excercice } = course;
    return (
        <>
            <p>
                <strong>Course: </strong>  { courseName } - <strong>Chapter: </strong> { part } - <strong>Excersise: </strong> { excercice }
            </p>
        </>
    )
}
