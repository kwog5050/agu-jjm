import React, { useState } from "react";

function Startups(props) {

  return (
    <div className="startups">

      <div className="criteria">
        <div className="wrap">
          <div>
            <h2>아구 중 기준</h2>
            <h3>마진율</h3>
            <img src="/img/subpage/startups/img01.png" alt="" />
          </div>
          <div>
            <h3>객단가</h3>
            <img src="/img/subpage/startups/img02.png" alt="" />
            <p>37,000~40,000원</p>
          </div>
        </div>
      </div>

      {props.Avg}

      {props.Review}

      {props.Gallery}
    </div>
  )
}

export default Startups;