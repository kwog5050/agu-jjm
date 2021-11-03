import React, { useState } from "react";

function Loction() {

  let [loction, setLoction] = useState([
    {
      name : '- 포항 본점',
      address : '경북 포항시 북구 새천년대로 1020번길 3',
      tel : '054-232-1414',
    },
    {
      name : '- 경주점',
      address : '경북 경주시 한빛길20번길 36-1',
      tel : '0504-2015-2260',
    },
    {
      name : '- 포항 양학점',
      address : '경북 포항시 북구 양학로 6-2 1층(용흥동)',
      tel : '054-273-1413',
    },
  ])

  return (
    <div className="loction">
      <div className="wrap">
        <ul>
          {
            loction.map(function (a, i) {
              return (
                <li>
                  <div>
                    <h2>{ a.name }</h2>
                    <span>
                      <div><span>ㅣ주소</span>{ a.address }</div>
                      <div><span>ㅣ전화번호</span>{ a.tel }</div>
                    </span>
                  </div>
                  <div className="imgbox">
                    <img src={`/img/subpage/loction/${i + 1}.jpg`} alt="" />
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Loction;