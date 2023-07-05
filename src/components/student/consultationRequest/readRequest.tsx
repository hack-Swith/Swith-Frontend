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
            <CompanyNameText>회사 이름</CompanyNameText>
            <DateText>2023년 07월 03일</DateText>
          </div>
        </InfoSection>
        <p>요청 사유</p>
        <TitleInput placeholder="요청 사유를 작성해주세요." />
        <p>상세 내용</p>
        <MainInput placeholder="상세 내용을 작성해주세요." />
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
    color: #c9c9c9;
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
    color: #c9c9c9;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }
`;

export default readRequest;
