import React from 'react';
import "./App.css";
import Img1 from './img/Beach1.jpg';
import Img2 from './img/Beach2.jpg';
import Img3 from './img/Forest1.jpg';
import Img4 from './img/Forest2.jpg';
import Img5 from './img/Mountain1.jpg';
import Img6 from './img/Mountain2.jpg';
import Img7 from './img/Animal1.jpg';
import Img8 from './img/Animal2.jpg';
import Img9 from './img/City1.jpg';
import Img10 from './img/City2.jpg';

const Gallery = () => {
    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        }
    ]

    return (
        <div className="gallery">
            {data.map((item, index) => {
                return (
                    <div className="images" key={index}>
                        <img src={item.imgSrc} />
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery