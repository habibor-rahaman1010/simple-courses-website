import { Carousel } from '@trendyol-js/react-carousel';
import React from 'react';

export const Highlight = ({ children, color, rightArrow, leftArrow }) => (<span style={{
    backgroundColor: color,
    borderRadius: '2px',
    color: '#fff',
    padding: '90px 0',
    display: 'block',
    height: '200px',
    margin: '16px 16px 16px 0',
    textAlign: 'center'
}}> {children} {rightArrow} {leftArrow} </span>);

const Carusal = () => {

    return (
        <div className=' mb-5'>
            <Carousel show={4} slide={3} swiping={true} rightArrow={true} leftArrow={true}>
                <Highlight color="#2d66c3">I am a programmer ❤️</Highlight>
                <Highlight color="#f44336">I am a Self-Taught Learner 😉</Highlight>
                <Highlight color="#2d66c3">I am a honest person ❤️</Highlight>
                <Highlight color="#f44336">I expert to JavaScript, TypeScript and Python 😘 </Highlight>
                <Highlight color="#2d66c3">I am a Full Stack Developer 🙂</Highlight>
                <Highlight color="green">I love to learn and teach ❤️</Highlight>
                <Highlight color="blue">I try to learn something new every day 😍</Highlight>
            </Carousel>
        </div>
    );
};

export default Carusal;