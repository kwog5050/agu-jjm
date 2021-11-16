import React, { useState, useEffect } from "react";
const { kakao } = window;

function Loction() {

  let [loction, setLoction] = useState([
    {
      name : '- 포항 본점',
      address : '경북 포항시 북구 새천년대로 1020번길 3',
      tel: '054-232-1414',
      mapX : "36.06041286724655",
      mapY : "129.37072503796801",
      idName : "map01",
    },
    {
      name : '- 경주점',
      address : '경북 경주시 한빛길20번길 36-1',
      tel: '054-744-6530',
      mapX : "35.853797193622356",
      mapY : "129.20510791323335",
      idName : "map02",
    },
    {
      name : '- 포항 남구점 (홀 식사 가능)',
      address : '경상북도 포항시 남구 대이로41번길 14',
      tel: '054-273-1413',
      mapX : "36.018650946586995",
      mapY : "129.3404034404203",
      idName : "map03",
    },
  ])

  return (
    <div className="loction">
      <div className="wrap">
        <ul>
          {
            loction.map(function (a, i) {
              return (
                <li key={i}>
                  <div>
                    <h2>{ a.name }</h2>
                    <span>
                      <div><span>ㅣ주소</span>{ a.address }</div>
                      <div><span>ㅣ전화번호</span>{ a.tel }</div>
                    </span>
                  </div>
                  {KakaoMap(a.mapX, a.mapY, a.idName)}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

function KakaoMap(x, y, idName) {

  useEffect(() => {
    var container = document.getElementById(idName);
    var option = {
      center: new kakao.maps.LatLng(x, y),
      level: 3
    };

    var map = new kakao.maps.Map(container, option);
    var markerPosition  = new kakao.maps.LatLng(x, y); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  },[])

  return (
    <div id={idName} className="kakaoMap" style={{ width:"100%", height:"300px" }}></div>
  )
}

export default Loction;