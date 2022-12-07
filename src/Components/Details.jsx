import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../Firebase"
import blackimg from "../Images/play-icon-black.png"
import whiteimg from "../Images/play-icon-white.png"
import groupimg from "../Images/group-icon.png"

import "../Styles/detail.css";
const Details = () => {

  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);



  return (
    <div className="Details">
            <div className="Details-img">
      <img alt={detailData.title} src={detailData.backgroundImg} />
      </div>
      <div className="Title-img">
      <img alt={detailData.title} src={detailData.titleImg} />
      </div>
      <div className="Details-content">
        <div className="Details-contols">
<button className="Player">
<img src={blackimg} alt="ALT" />
            <span>Play</span>
</button>
<button className="Trailer">
<img src={whiteimg} alt="ALT" />
            <span>Trailer</span>
</button>
<div className="Addlist">
  <span/>

  <span/>
</div>
<div className="Group_watch">
  <div>
  <img src={groupimg} alt="ALT" /> </div>
</div>

        </div>
        <div className="subtitle">
        {detailData.subTitle}
</div>
<div className="description">
{detailData.description}</div>
      </div>
    </div>
  );
};

export default Details;
