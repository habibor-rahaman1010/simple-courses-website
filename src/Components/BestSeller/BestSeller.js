import DisplayBestSeller from './DisplayBestSeller';
import UseAuthProvider from '../../Hooks/UserAuthProvider';

const BestSeller = () => {
    const { courses } = UseAuthProvider()

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