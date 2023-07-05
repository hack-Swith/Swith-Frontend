import { styled } from "styled-components";
import Header from "../../header";
import EnvironmentCultureCheck from "./environmentCultureCheck";
import FollowSafetyRuleCheck from "./followSafetyRuleCheck";
import RiskManagementCheck from "./riskManagementCheck";

const WritingSafetyChecklist = () => {
  return (
    <>
      <Header />
      <TextSection>
        <TitleText>안전 점검표 작성</TitleText>
        <AdditionText>거짓된 정보 없이 솔직하게 작성해주세요!</AdditionText>
      </TextSection>
      <EnvironmentCultureCheck />
      <RiskManagementCheck />
      <FollowSafetyRuleCheck />
      <ButtonSection>
        <FinishButton>완료</FinishButton>
      </ButtonSection>
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

const AdditionText = styled.div`
  color: #505050;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-left: 5px;
`;

const ButtonSection = styled.div`
  padding: 0 361px 100px;
`;

const FinishButton = styled.button`
  width: 1005px;
  height: 65px;
  border: none;
  border-radius: 15px;
  background: #46baeb;
  color: #fff;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
`;

export default WritingSafetyChecklist;
