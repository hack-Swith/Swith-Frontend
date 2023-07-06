import { styled } from "styled-components";
import { Bar } from "../../assets/icons";
import Header from "../header";

const FocusConsultationRequest = () => {
  return (
    <Container>
      <Header />
      <Div>
        <TitleText>상담 요청서</TitleText>
        <AddCheckerButton>점검자로 등록</AddCheckerButton>
      </Div>
      <Content>
        <InfoSection>
          <img src={Bar} alt="" />
          <div>
            <CompanyNameText>회사 이름</CompanyNameText>
            <DateText>2023년 07월 03일</DateText>
          </div>
        </InfoSection>
        <p>요청 사유</p>
        <TitleInput placeholder="어떠한 사유 때문에 상담을 신청합니다." />
        <p>상세 내용</p>
        <MainInput placeholder="어떠한 일이 있었습니다 ......" />
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Div = styled.div`
  display: flex;
  gap: 620px;
  align-items: flex-end;
`;

const TitleText = styled.div`
  color: #000;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  margin-top: 73px;
  margin-left: 351px;
`;

const AddCheckerButton = styled.button`
  width: 150px;
  height: 47px;
  border: none;
  border-radius: 10px;
  background: #46baeb;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
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
    color: #000;
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
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }
`;

export default FocusConsultationRequest;
