import { useNavigate } from "react-router-dom";
import Button from "components/Button";
import logo from "assets/logo.png";
import landing1 from "assets/landing1.png";
import home1 from "assets/Home-1.png";
import home2 from "assets/Home-2.png";
import home3 from "assets/Home-3.png";
import "./Landing.scss";

export default function Landing({ childeren, onClick }) {
  const nav = useNavigate();

  return (
    <div className="view">
      <div className="CenterLine"></div>
      <section className="LandingSection1">
        <h2>
          내가 좋아하는 아이돌을
          <br />
          가장 <span className="SpanWord">쉽게 덕질</span> 하는 방법
        </h2>
        <img className="LandingLogo" src={logo} alt="로고" />
        <img className="LandingBackground" src={landing1} alt="배경 이미지" />
        <div className="BackgroundLinear"></div>
        <Button
          className="LandingButton"
          onClick={() => {
            nav("/list");
          }}
        >
          지금 시작하기
        </Button>
      </section>
      <section className="LandingSection2">
        <div className="LandingTitle">
          <span className="MainTitle">후원하기</span>
          <p className="SubTitle">
            좋아하는 아이돌에게
            <br />
            쉽게 조공해 보세요
          </p>
        </div>
        <img src={home1} alt="홈 사진1" />
        <div className="BackgroundImg"></div>
      </section>
      <section className="LandingSection3">
        <div className="LandingTitle">
          <span className="MainTitle">이달의 아티스트</span>
          <p className="SubTitle">
            내 아티스트에게 1등의
            <br />
            영예를 선물하세요
          </p>
        </div>
        <img src={home2} alt="홈 사진2" />
        <div className="BackgroundImg"></div>
      </section>

      <section className="LandingSection4">
        <div className="LandingTitle">
          <span className="MainTitle">나만의 아티스트</span>
          <p className="SubTitle">
            좋아하는 아티스트들의
            <br />
            소식을 모아보세요
          </p>
        </div>
        <img src={home3} alt="홈 사진3" />
        <div className="BackgroundImg"></div>
      </section>
    </div>
  );
}
