import React, { useState } from "react";

function Company() {

  return (
    <div className="company">
      <div className="content">
        <img className="bg" src="/img/subpage/brand/bg.png" alt="" />
        <div className="wrap">
          <div className="bar"></div>

          <h2>풍운F&B 회사소개</h2>

          <ul>
            <li><img src="/img/subpage/company/img.png" alt="" /></li>
            <li>
              <p>
                세상은 너무도 빠르게 변화하고 있습니다. <br />
                하지만 변하지 않는 가치를 가진 것들은 분명히 존재합니다.
              </p>
              <p>
                수많은 프렌차이즈의 홍수 속에서 더 이상 오랜 시간 동안 <br />
                사랑 받을 수 있는 브랜드를 창조하거나 운영하는 것이 <br />
                쉽지 않게 되었습니다.
              </p>
              <p>
                단순히 유행을 쫓는 것이 아닌 오랜 시간 사랑을 받을 수 있는 <br />
                그리고 변하지 않는 가치를 창출하기 위해 노력하겠습니다.
              </p>
            </li>
          </ul>

          <div className="mission">
            <h3><span>MISSION</span>미션</h3>
            <p>변화하는 세상 속에서 변하지 않는 가치를 창출한다.</p>
          </div>

          <div className="mission">
            <h3><span>VISION</span>미션</h3>
            <p>아구찜. 해물찜 프랜차이즈 1등 업체로의 도약</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company;