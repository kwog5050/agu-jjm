import React, { useState } from "react";

function Brand() {

  let [contentImageName, setContentImageName] = useState([
    "천연 비법소스",
    "신선한 재료",
    "정성을 다한 조리",
  ])

  return (
    <div className="brand">
      <div className="intro">
        <img src="/img/subpage/Brand/logo.png" alt="" />
        <div className="bar"></div>
        <p>
          한 사람이 끼치는 위대한 영향을 알기에 <br />
          정성을 다한 식사를 통해 <br />
          사회의 긍정적인 변화가 이루어 지기를 희망한다.
        </p>
      </div>

      <div className="content">
        <img className="bg" src="/img/subpage/brand/bg.png" alt="" />
        <div className="wrap">
          <div className="bar"></div>
          <h2>자랑하고 싶은 맛</h2>
          <p>
            최고의 재료에서 맛이 나온다는 철칙으로 <br />
            매일 손질하는 신선한 재료와 천연 비법소스를 사용합니다.
          </p>
          <p>
            찜 하나를 만들기 위해서는 최소 20~30분 동안 <br />
            쟈료에 양념이 잘 배이도록 불 조절을 하면서 <br />
            정성을 다해 조리해야 합니다.
          </p>
          <p>
            번거롭기도 하고 어려울 때도 있지만 <br />
            고객님들의 높은 재방문율은 이러한 우리의 정성을 <br />
            알아주시는거라 확신하게 되는 일이기도 합니다.
          </p>
          <p className="bold"> 
            수많은 경쟁에서 마지막 남은 성공 아이템 <br />
            '명가생아구찜'
          </p>
          <p className="bold">
            성공을 향해 동행 하겠습니다.
          </p>
          <ul>
          {
            contentImageName.map(function(a, i) {
              return (
                <li>
                  <img src={`/img/subpage/brand/content0${i + 1}.png`} alt="" />
                  <div className="bar"></div>
                  <p>{ a }</p>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Brand;