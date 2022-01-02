import React from 'react';
import { useHistory } from 'react-router-dom';

const DisplayBestSeller = ({ filterCours }) => {
    const { des, title, img, position, price, rating, tutor, enrolled, id } = filterCours || {};

    const history = useHistory();

    const handleClickDetails = (id) => {
        history.push(`/our/courses/details/${id}`)
    }

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{des.slice(0, 100)}...</p>
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
                        <button onClick={() => { handleClickDetails(id) }} className='btn btn-secondary'>Details Course</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayBestSeller;