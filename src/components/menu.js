import React, { useState } from "react";

function Menu() {

  let [menuName, setMenuName] = useState([
    "스페셜 모듬찜",
    "명가생아구찜",
    "해물찜",
    "미더덕찜",
    "대구뽈찜",
    "왕새우찜",
    "가오리찜",
  ])

  return (
    <div className="menuIntro">
      <div className="wrap">
        <ul>
        {
          menuName.map(function (a, i) {
            return (
              <li>
                <img src={`/img/subpage/menu/0${i + 1}.png`} alt="" />
                <span>{ a }</span>
              </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default Menu;