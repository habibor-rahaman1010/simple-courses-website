import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UseAuthProvider from '../../../Hooks/UserAuthProvider';

const Details = () => {
    const { courses } = UseAuthProvider()

    const history = useHistory();

    const handleClickCourse = () => {
        history.push(`/our/courses/`)
    }

    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        if (courses.length > 0) {
            const matchedCouse = courses.find((x) => parseInt(x.id) === parseInt(id));
            setDetails(matchedCouse);
        }
    }, [courses, id])

    const { des, title, img, position, price, rating, tutor, enrolled } = details;

    return (
        <div className='HomeSection w-50'>
            <h2>This is details section {id}</h2>
            <div className="card mb-3 mt-4 mb-5">
                <img src={img} className="card-img-top" alt="product" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{des}</p>
                    <p className='tutor'>Tutor By: {tutor}</p>
                    <div className=' d-flex justify-content-between'>
                        <h5 className='price'>Price: {price}</h5>
                        <p className='rating'>Rating: {rating}</p>
                    </div>

                    <div className=' d-flex justify-content-between'>
                        <button className=' btn btn-primary'>Enrolled</button>
                        <p className=''>{enrolled}&ensp;Students</p>
                    </div>
                    <div className='btn-grop'>
                        <p className='bestSeller'>{position}</p>
                        <button onClick={handleClickCourse} className='btn btn-secondary'>All Courses</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;