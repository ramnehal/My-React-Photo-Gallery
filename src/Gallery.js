import React, { useState } from 'react';
import "./App.css";

import CloseIcon from '@mui/icons-material/Close';

import beach1 from './img/Beach1.jpg';
import beach2 from './img/Beach2.jpg';
import forest1 from './img/Forest1.jpg';
import forest2 from './img/Forest2.jpg';
import mountain1 from './img/Mountain1.jpg';
import mountain2 from './img/Mountain2.jpg';
import animal1 from './img/Animal1.jpg';
import animal2 from './img/Animal2.jpg';
import city1 from './img/City1.jpg';
import city2 from './img/City2.jpg';

const Gallery = () => {
    let data =[
        {
            id: 1,
            imgSrc: beach1,
        },
        {
            id: 2,
            imgSrc: beach2,
        },
        {
            id: 3,
            imgSrc: forest1,
        },
        {
            id: 4,
            imgSrc: forest2,
        },
        {
            id: 5,
            imgSrc: mountain1,
        },
        {
            id: 6,
            imgSrc: mountain2,
        },
        {
            id: 7,
            imgSrc: animal1,
        },
        {
            id: 8,
            imgSrc: animal2,
        },
        {
            id: 9,
            imgSrc: city1,
        },
        {
            id: 10,
            imgSrc: city2,
        }
    ]

    const [model, setModel] = useState(false);
    const [temimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
        <div className={model ? "model open" : "model"}>
            <img src={temimgSrc} />
            <CloseIcon onClick={() => setModel(false)} />
        </div>

        <div className="gallery">
            {data.map((item, index) => {
                return (
                    <div className="images" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery