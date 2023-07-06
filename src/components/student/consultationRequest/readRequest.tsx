import { styled } from "styled-components";
import Header from "../../header";
import { Bar } from "../../../assets/icons";

const readRequest = () => {
  return (
    <Container>
      <Header />
      <TitleText>상담 요청서</TitleText>
      <Content>
        <InfoSection>
          <img src={Bar} alt="" />
          <div>
            <CompanyNameText>(주) Swith company</CompanyNameText>
            <DateText>2023년 07월 06일</DateText>
          </div>
        </InfoSection>
        <p>요청 사유</p>
        <TitleInput placeholder="요청 사유를 작성해주세요처음에 안내 받았던 업무 내용이 달라요." />
        <p>상세 내용</p>
        <MainInput
          placeholder="처음 안내 받은 업무 내용은 백엔드 서버를 개발하는 일이었는데, 회사에 가보니 개발 업무를 시키지 않고 문서작업만 시켜서
          고민입니다ㅠㅠ 초반 회사에 가서 업무를 받을 때, 처음 안내받은 업무와 다른 일을 하는 경우도 있나요? 너무 답답합니다."
        />
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const TitleText = styled.div`
  color: #000;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  margin-top: 73px;
  margin-left: 351px;
`;

const Content = styled.div`
  padding: 20px 361px 120px;
  p {
    margin-left: 17px;
    margin-bottom: 5px;
    color: #505050;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 50px;
  display: flex;
`;

const CompanyNameText = styled.div`
  display: flex;
  margin-left: 10px;
  color: var(--gray-03, #505050);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
`;

const DateText = styled.div`
  display: flex;
  margin-left: 10px;
  color: var(--gray-03, #505050);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 65px;
  border-radius: 15px;
  border: 2px solid #d3d3d3;
  outline: none;
  background: rgba(217, 217, 217, 0);
  margin-bottom: 34px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  padding: 0 25px;
  &::placeholder {
    color: #505050;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }
`;

const MainInput = styled.textarea`
  width: 100%;
  height: 330px;
  border-radius: 15px;
  border: 2px solid #d3d3d3;
  outline: none;
  background: rgba(217, 217, 217, 0);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  padding: 20px 25px;
  &::placeholder {
    position: absolute;
    color: #505050;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }
`;

export default readRequest;
