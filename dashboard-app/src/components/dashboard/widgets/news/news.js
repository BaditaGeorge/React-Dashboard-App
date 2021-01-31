import React from 'react';
import MarsImage from './418_marsglobe.jpg';
import './news.scss';


function News(){
    return (
        <div>
            <img src={MarsImage} style={{width:'100%'}} height={390}></img>
            <p className="news">Researchers hopes to reach Red Planet 'til 2039</p>
        </div>
    )
}

export default News;