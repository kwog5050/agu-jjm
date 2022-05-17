import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';

import Main from './components/main.js';
import SubPage from './components/subPage.js';

import './sass/common.scss';

function App() {

  let [mobileMenu, setMobileMenu] = useState(false);

  // 웹 브라우저 넓이 감지 함수
  window.onresize = () => {
    let width = window.innerWidth;
    if (width > 1200) {
      setMobileMenu(false);
    }
  }

  return (
    <div className="App">
      <header>
        <div className="flexBox">
          <a href="/">
            <h1><img src="/img/hd_logo.svg" alt="" /></h1>
          </a>
          <nav className="menu pc">
            <MenuList></MenuList>
          </nav>
          
          <div className="sns pc">
            <a href="https://www.instagram.com/myeong.ga_official" target="_blank">
              <img src="/img/instar.png" alt="" />
            </a>
          </div>

          <div className="mobile">
            <button onClick={() => {setMobileMenu(!mobileMenu)}}>
              {
                mobileMenu == true
                  ? <i class="fas fa-bars on"></i>
                  : <i class="fas fa-bars"></i>
              }
            </button>
          </div>

          {
            mobileMenu == true
              ? <div className="mobileMenu on">
                  <MenuList></MenuList>
              </div>
              : <div className="mobileMenu">
                  
              </div>
          }

        </div>
        <Contact></Contact>
      </header>

      <main>

        <Switch>
          <Route exact path="/">
            <Main Avg={Avg()} Review={Review()} Gallery={Gallery()}></Main>
          </Route>

          <Route path="/:params">
            <SubPage SubBanner={SubBanner} Avg={Avg()} Review={Review()} Gallery={Gallery()}></SubPage>
          </Route>
        </Switch>

      </main>

      <footer>
        <h1><img src="/img/ft_logo.svg" alt="" /></h1>
        <p>
          (주)풍운 명가생아구찜 ㅣ 대표자.이상현 <span>ㅣ</span> <br className="br"/> 사업자등록번호.568-87-02387 <br />
          주소.경상북도 포항시 남구 대이로41번길 14<br className="br" /> 1층(대잠동)
        </p>
        <div className="copyright">
          COPYRIGHT(C) 2021 명가생아구찜 <br className="br" />ALL RIGHT RESERVED.
        </div>
      </footer>

    </div>
  );

  function MenuList() {
    return (
      <ul>
        <li><Link onClick={()=>{setMobileMenu(false)}} to="/Brand">브랜드소개</Link></li>
        <li><Link onClick={()=>{setMobileMenu(false)}} to="/Menu">메뉴소개</Link></li>
        <li><Link onClick={()=>{setMobileMenu(false)}} to="/Loction">매장소개</Link></li>
        <li><Link onClick={()=>{setMobileMenu(false)}} to="/Startups">창업안내</Link></li>
        <li><Link onClick={()=>{setMobileMenu(false)}} to="/Company">회사소개</Link></li>
      </ul>
    )
  }

  function Contact() {
    let [contact, setContact] = useState(false);

    return (
      <div className="contact">
        <button onClick={()=>{ setContact(!contact) }}>
          <div>
            <img src="/img/contact.png" alt="" />
            가맹문의
          </div>
        </button>
        {
          contact == true
            ? <div className="formBg" onClick={() => {
              setContact(false);
            }}></div>
            : null
        }
        {
          contact == true
            ? <form action="http://myeong-ga.co.kr/mail/mail.php" method="post">
                <i class="fas fa-times" onClick={() => {
                  setContact(false);
                }}></i>
                <input name="name" type="text" placeholder="성함"/>
                <input name="tel" type="text" placeholder="연락처"/>
                <input name="email" type="email" placeholder="이메일"/>
                <input name="address" type="text" placeholder="가맹희망지역"/>
                <input name="money" type="text" placeholder="예상창업비용"/>
                <div className="select">
                  <select name="store" id="">
                    <option value="선택안함">점포보유유무</option>
                    <option value="없음">없음</option>
                    <option value="있음">있음</option>
                  </select>
                  <i class="fas fa-chevron-down"></i>
                </div>
                <textarea name="content" placeholder="문의내용"></textarea>
                <input type="submit" value="제출하기" />
              </form>
            : null
        }
      </div>
    )
  }

  function Avg() {

    // 숫자 3자리마다 콤마 찍어주는 함수
    Number.prototype.comma = function() {
      return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    let [month, setMonth] = useState(0);
    let [days, setDays] = useState(0);
    let [weekend, setWeekend] = useState(0);

    // 숫자 증가 함수
    const monthNum = 45000000;
    const daysNum = 1300000;
    const weekendNum = 2500000;
    function count() {
      setTimeout(() => {
        if (month < monthNum) {
          setMonth(month + 360000);
        }
        if (days < daysNum) {
          setDays(days + 10400);
        }
        if (weekend < weekendNum) {
          setWeekend(weekend + 20000);
        }
      }, 10)
    }
    count();

    return (
      <div className="avg">
				<div className="wrap">
					<img src="/img/main/avg.png" alt="" />
					<ul>
						<li>
							<h4>월 평균매출</h4>
							<div>{ month.comma() }<span>원</span></div>
						</li>
						<li>
							<h4>평일 일 평균매출</h4>
							<div>{ days.comma() }<span>원</span></div>
						</li>
						<li>
							<h4>주말 일 평균매출</h4>
							<div>{ weekend.comma() }<span>원</span></div>
						</li>
					</ul>
				</div>
			</div>
    )
  }

  function Review() {

    let [review, setReview] = useState([
      {
        name : '맞집',
        content : '소로 시켰는데 양이 너무 많아서 깜짝 놀랬어요! <br>완전 맛있습니당ㅠㅠ 같이 오는 사이드도 너무 만족!! <br>잘 먹었어요 ㅎㅎ'
      },
      {
        name: '우현동기뇨사',
        content : '콩나물찜아니고 진짜 해물 그득한 해물찜이네요 <br>정말 푸짐한데 맛도 굿 <br>리뷰이벤트 신청 안했는데 리뷰 씁니다 <br>정말 정말 잘먹었습니다 <br>물김치도 진짜 맛있어요 <br>다음에는 물김치도 추가 할께요'
      },
      {
        name : 'stellabell',
        content : '처음 시켜보았는데, 양이 어마어마하네요!! "소"자로 <br>시켰는데 3명이서 먹기 딱 좋은 양이예요! 열무김치랑 <br>계란찜, 요구르트가 기본으로 제공되니 주문 시 참고하시면 <br>좋을 것 같아요:) 게살도 꽉차있고 해산물도 싱싱해서 <br>맛있게 잘먹었어요~'
      },
    ]);

    return (
      <div className="review">
        <img src="/img/main/reviewBg.png" alt="" className="reviewBg" />
				<div className="wrap">
					<div className="bar"></div>
					<h2>
						명가생아구찜을 경험한 <br />
						<p>고객님들의 생생한 후기</p>
					</h2>
					<ul>
						{
							review.map((a, i) => {
								return (
									<li key={i}>
										<img src={`/img/main/review0${i + 1}.png`} alt="" />
										<div>
											<h3>{ review[i].name }<span>님</span></h3>
											<div className="star">★★★★★</div>
											<p dangerouslySetInnerHTML={{ __html : a.content}}></p>
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

  function Gallery() {

    function gallery() {
      let image = [];
      for (let i = 0; i < 6; i++){
        image.push(<img src={`/img/main/reviewGallery0${i + 1}.jpg`} alt="" />);
      }
      return image;
    }

    return (
      <div className="gallery">{gallery()}</div>
    )
  }

  function SubBanner() {

    let { params } = useParams();

    function pageName() {
      let title = '';

      switch (params) {
        case 'Brand':
          title = '브랜드소개';
          window.scrollTo(0, 0);
          break;
        case 'Menu':
          title = '메뉴소개';
          window.scrollTo(0, 0);
          break;
        case 'Loction':
          title = '매장소개';
          window.scrollTo(0, 0);
          break;
        case 'Startups':
          title = '창업안내';
          window.scrollTo(0, 0);
          break;
        case 'Company':
          title = '회사소개';
          window.scrollTo(0, 0);
        default:
          break;
      }
      return title;
    }

    return (
      <div className="subBanner">
        <span>{pageName()}</span>
        <img className="pcimg" src={`/img/${params}.jpg`} alt="" />
        <img className="moimg" src={`/img/mo_${params}.jpg`} alt="" />
      </div>
    )
  }
}

export default App;
