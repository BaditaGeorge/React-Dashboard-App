import React, {useState} from "react";
import "./shares.scss";
import ShareCard from "./share-card/shareCard";
import ShareChart from "./share-chart/shareChart";

function Shares() {
  let shares = [
    {
      symbol: "APPL",
      low: 126.88,
      high: 127.61,
      open: 127.48,
      marketCap: "735B",
      ratio: 15.73,
      data: [127, 122, 115, 144, 138, 129, 118, 125, 133],
      dir:-0.85
    },
    {
      symbol: "AMZN",
      low: 3236,
      high: 3184,
      open: 3230,
      marketCap: "1.61T",
      ratio: 93.89,
      data: [3177, 3182, 3170, 3200, 3215, 3230, 3207, 3235, 3220],
      dir:+0.45,
    },
    {
      symbol: "GOOG",
      low: 1810.2,
      high: 1857.28,
      open: 1846.17,
      marketCap: "1.24T",
      ratio: 35.47,
      data: [1800, 1820, 1790, 1817, 1822, 1855, 1860, 1850, 1857],
      dir:-0.81
    },
    {
      symbol: "TSLA",
      low: 780,
      high: 842.41,
      open: 830,
      marketCap: "752.19B",
      ratio: 1255.27,
      data: [
          780,822,798,800,830,835,842,810,835
      ],
      dir:+0.35
    },
  ];
  let [stockObj,setStockObj] = useState(shares[0]);
  let [cIndex,setCIndex] = useState(0);
  return (
    <>
      <div className="sharelist">
          {shares.map((share,index) => <ShareCard click={()=>{
              setStockObj(share);
              setCIndex(index);
          }} name={share.symbol} price={share.open} dir={share.dir} cIndex={cIndex} index={index}></ShareCard>)}
        {/* <ShareCard></ShareCard>
        <ShareCard></ShareCard>
        <ShareCard></ShareCard>
        <ShareCard></ShareCard> */}
      </div>
      <div className="chart">
        <ShareChart symbol={stockObj.symbol} data={stockObj.data}></ShareChart>
      </div>
    </>
  );
}

export default Shares;
