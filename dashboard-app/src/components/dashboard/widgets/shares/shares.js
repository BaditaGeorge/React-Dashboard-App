import React from "react";
import './shares.scss';
import ShareCard from './share-card/shareCard';
import ShareChart from './share-chart/shareChart';

function Shares(){

    return (
        <>
            <div className="sharelist">
                <ShareCard></ShareCard>
                <ShareCard></ShareCard>
                <ShareCard></ShareCard>
                <ShareCard></ShareCard>
            </div>
            <div className="chart">
                <ShareChart></ShareChart>
            </div>
        </>
    )
}

export default Shares;