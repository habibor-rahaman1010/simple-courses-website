import './Home.css'
import DisplayCourses from './DisplayCourses';
import Carusal from '../Carusal/Carusal';
import UseAuthProvider from '../../Hooks/UserAuthProvider';


const Home = () => {
    const { courses } = UseAuthProvider()

    const items = []
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        if (items.length < 8) {
            items.push(course)
        }
    }

    const obj = {
        image: 'https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg',
        title: 'Learn Programming are always by your side!',
        description: 'Welcome to “MERN Stack with Blog Project”. In this course, we will be building an in-depth full-stack Blog project application using Node.js, Express, React, and MongoDB along with ES6+. We will start with a blank text editor and end with a deployed full-stack application.'
    }
    return (
        <div className='HomeSection'>
            <section className=' container Header'>
                <div className='header_right'>
                    <h1>{obj.title}</h1>
                    <p>{obj.description}</p>
                    <button className=' btn btn-secondary'>See More</button>
                </div>
                <div>

                    <img src={obj.image} alt="Cover_Photo" />
                </div>
            </section>


            {/* display 8 product section  */}
            <section className=' mt-5 mb-5'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        items.map((item) => <DisplayCourses item={item} key={item.id}></DisplayCourses>)
                    }
                </div>
            </section>

            <Carusal></Carusal>

        </div>
    );
};

export default Home;