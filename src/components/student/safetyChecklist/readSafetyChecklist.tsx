import { styled } from "styled-components";
import { Bar } from "../../../assets/icons";
import Header from "../../header";
import EnvironmentCultureCheck from "./environmentCultureCheck";
import FollowSafetyRuleCheck from "./followSafetyRuleCheck";
import RiskManagementCheck from "./riskManagementCheck";

const ReadSafetyChecklist = () => {
  return (
    <>
      <Header />
      <TextSection>
        <Div>
          <TitleText>안전 점검표 작성</TitleText>
          <StateText>매우 위험</StateText>
        </Div>
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
      </TextSection>
      <EnvironmentCultureCheck />
      <RiskManagementCheck />
      <FollowSafetyRuleCheck />
    </>
  );
};

const TextSection = styled.div`
  padding: 73px 351px 75px 351px;
`;

const TitleText = styled.div`
  color: #000;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 2px;
`;

const StateText = styled.div`
  color: #eb4646;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const Div = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const InfoSection = styled.div`
  display: flex;
  margin-top: 15px;
`;

const CompanyNameText = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 5px;
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

export default ReadSafetyChecklist;
