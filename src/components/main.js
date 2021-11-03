import React, { useState, useEffect } from "react";
import { Carousel, } from "react-bootstrap";

import '../sass/main.scss';

function Main(props) {

	let [slideText, setSlideText] = useState([
		'자랑하고 싶은 맛 \n<span>명가생아구찜</span>이 <br>전하고 싶은 마음입니다',
		'자랑하고 싶은 맛 \n<span>명가생아구찜</span>이 <br>전하고 싶은 마음입니다2',
	]);
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

	function gallery() {
		let image = [];
		for (let i = 0; i < 6; i++){
			image.push(<img src={`/img/main/reviewGallery0${i + 1}.jpg`} alt="" />);
		}
		return image;
	}
	
	

	return (
		<div className="main">
			<div className="slide">
				<Carousel fade>
					{
						slideText.map((a, i) => {
							return (
								<Carousel.Item interval={2000} key={i}>
									<img className="d-block w-100 pcimg" src={`/img/main/slide0${i + 1}.jpg`} alt="First slide" />
									<img className="d-block w-100 moimg" src={`/img/main/mo_slide0${i + 1}.jpg`} alt="First slide" />
									<p className="slideText" dangerouslySetInnerHTML={{ __html: a }}></p>
								</Carousel.Item>
							)
						})
					}
				</Carousel>
			</div>

			{props.Avg}

			{props.Review}
			
      {props.Gallery}
		</div>
	)
}



export default Main;