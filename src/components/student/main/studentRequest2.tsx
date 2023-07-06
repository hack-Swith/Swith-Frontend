import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Bar } from "../../../assets/icons";
import { StudentRequestL2 } from "../../contance";
import Header from "../../header";
import RequestList from "./studentRequestList";

const StudentRequest2 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <TitleText>최희</TitleText>
      <Content>
        <InfoSection>
          <img src={Bar} alt="" />
          <div>
            <CompanyNameText>(주) Swith company</CompanyNameText>
            <div style={{ display: "flex", gap: "20px" }}>
              <DepartmentText>정보보안과</DepartmentText>
              <ClassNumberText>4반 17번</ClassNumberText>
            </div>
          </div>
        </InfoSection>
        <div>
          <ChecklistButton onClick={() => navigate("/studentSafetyChecklist")}>
            안전 점검표
          </ChecklistButton>
          <RequestButton>상담 요청서</RequestButton>
          <Line></Line>
        </div>
        <CheckStartButton onClick={() => navigate("/writingRequest")}>
          상담 요청서 작성하기
        </CheckStartButton>
        {StudentRequestL2.map((item) => (
          <RequestList
            reason={item.reason}
            date={item.date}
            state={item.state}
          />
        ))}
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
  color: #505050;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
`;

const DepartmentText = styled.div`
  display: flex;
  margin-left: 10px;
  color: var(--gray-03, #505050);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const ClassNumberText = styled.div`
  display: flex;
  margin-left: 10px;
  color: var(--gray-03, #505050);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const ChecklistButton = styled.button`
  width: 158px;
  height: 50px;
  border: none;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 2px solid #d3d3d3;
  background: rgba(255, 255, 255, 0);
  color: var(--gray-03, #505050);
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
`;

const RequestButton = styled.button`
  width: 158px;
  height: 50px;
  border: none;
  border-radius: 10px 10px 0px 0px;
  border-top: 2px solid #d3d3d3;
  border-right: 2px solid #d3d3d3;
  border-left: 2px solid #d3d3d3;
  background: rgba(255, 255, 255, 0);
  color: #46baeb;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  margin-top: 1px;
`;

const Line = styled.div`
  width: 672px;
  height: 2px;
  background: #d3d3d3;
  margin-left: 316px;
`;

const CheckStartButton = styled.button`
  margin-top: 20px;
  margin-left: 765px;
  margin-bottom: 35px;
  width: 223px;
  height: 48px;
  border: none;
  border-radius: 10px;
  background: #47bbec;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export default StudentRequest2;
