import UseAuthProvider from '../../Hooks/UserAuthProvider';
import Course from './Course';

const Courses = () => {
    const { courses } = UseAuthProvider()

    return (
        <div className='HomeSection'>
            <h3 className='mb-4 pt-2 '>Number Of Course: {courses.length}</h3>
            <div className='row row-cols-1 row-cols-md-4 g-4 mb-5'>
                {
                    courses.map((course) => <Course course={course} key={course.id}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;