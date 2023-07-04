import styled from "styled-components";
import { Logo, MainCheck } from "../../assets/icons";

const Main = () => {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="" />
        <p>swith</p>
      </Header>
      <MainSection>
        <MainLeft>
          <TitleText>
            안심하고 일할 수 있도록,
            <br />
            저희가 도와드릴게요
          </TitleText>
          <MainText>
            사고는 예기치 못한 때 일어납니다.
            <br />
            더이상 방심이 아닌 안심이 되는 세상이 될 수 있도록
            <br />
            오늘도 swith해요
          </MainText>
          <GoLoginButton>로그인 하러가기</GoLoginButton>
        </MainLeft>
        <MainRight>
          <img src={MainCheck} alt="" />
        </MainRight>
      </MainSection>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #44b9eb 0%, rgba(69, 186, 235, 0) 100%),
    radial-gradient(
      59.74% 59.74% at 50.08% 62.99%,
      #fff 0%,
      rgba(255, 255, 255, 0) 100%
    );
`;

const Header = styled.div`
  display: flex;
  padding: 30px 232px;
  gap: 10px;
  p {
    color: #fff;
    font-size: 25px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
  }
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 0 125px;
`;

const MainLeft = styled.div`
  margin-top: 203px;
  justify-content: flex-start;
`;

const TitleText = styled.div`
  color: #fff;
  font-size: 50px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 16px;
`;

const MainText = styled.div`
  color: #fff;
  font-size: 25px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 75px;
`;

const GoLoginButton = styled.button`
  color: #fff;
  font-size: 25px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  width: 516px;
  height: 77px;
  border: none;
  border-radius: 15px;
  background: conic-gradient(
    from 180deg at 50% 50%,
    #46baeb 0deg,
    #48baeb 360deg
  );
`;

const MainRight = styled.div`
  margin-left: 230px;
  margin-top: 129px;
`;

export default Main;
