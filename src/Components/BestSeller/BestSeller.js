import React, { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/ContextAPI';
import DisplayBestSeller from './DisplayBestSeller';

const BestSeller = () => {
    const courses = useContext(AuthContext);

    const filterCourses = [];
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        if (course.position === "Bestseller") {
            filterCourses.push(course)
        }
    }


    return (
        <div className='HomeSection'>
            <h3 className='pt-3 mb-4'>Best Seller Courses {filterCourses.length}</h3>
            <div className='row row-cols-1 row-cols-md-4 g-4 mb-5'>
                {
                    filterCourses.map((filterCours) => <DisplayBestSeller filterCours={filterCours} key={filterCours.id}></DisplayBestSeller>)
                }
            </div>
        </div>
    );
};

export default BestSeller;