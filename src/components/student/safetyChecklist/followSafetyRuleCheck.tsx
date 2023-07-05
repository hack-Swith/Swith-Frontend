import { styled } from "styled-components";

const FollowSafetyRuleCheck = () => {
  return (
    <>
      <Content>
        <QuestionHeader>
          <MainQuestionText>안전 규정 및 규칙 준수</MainQuestionText>
          <YesNo>
            <p>아니오</p>
            <p>예</p>
          </YesNo>
        </QuestionHeader>
        <Questions>
          <QuestionText>
            기업의 안전 규정과 규칙을 잘 이행하셨나요?
          </QuestionText>
          <YesNoCheckSection>
            <NoCheck type="radio" />
            <YesCheck type="radio" />
          </YesNoCheckSection>
        </Questions>
        <Questions>
          <QuestionText>
            작업 도중 안전 절차를 준수하고 안전 예방 수칙을 잘 따랐나요?
          </QuestionText>
          <YesNoCheckSection>
            <NoCheck type="radio" />
            <YesCheck type="radio" />
          </YesNoCheckSection>
        </Questions>
        <Questions>
          <QuestionText>
            동료들도 안전 규정을 준수하는 모습을 보였나요?
          </QuestionText>
          <YesNoCheckSection>
            <NoCheck type="radio" />
            <YesCheck type="radio" />
          </YesNoCheckSection>
        </Questions>
        <Questions>
          <QuestionText>안전에 대한 관리와 교육이 충분했나요?</QuestionText>
          <YesNoCheckSection>
            <NoCheck type="radio" />
            <YesCheck type="radio" />
          </YesNoCheckSection>
        </Questions>
        <Questions>
          <QuestionText>
            개선이 필요한 안전 관련 사항이 있으셨나요?
          </QuestionText>
          <YesNoCheckSection>
            <NoCheck type="radio" />
            <YesCheck type="radio" />
          </YesNoCheckSection>
        </Questions>
      </Content>
    </>
  );
};

const Content = styled.div`
  padding: 0 341px 75px;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  background-color: #fff;
  border-bottom: 2px solid #d3d3d3;
  padding: 20px 35px 0;
`;

const MainQuestionText = styled.div`
  color: #505050;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
`;

const YesNo = styled.div`
  display: flex;
  gap: 40px;
  color: #505050;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const Questions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 40px 15px 0 35px;
`;

const QuestionText = styled.div`
  color: #505050;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 40px;
`;

const YesNoCheckSection = styled.div`
  display: flex;
  gap: 25px;
`;

const NoCheck = styled.input`
  width: 50px;
  height: 50px;
  accent-color: red;
`;

const YesCheck = styled.input`
  width: 50px;
  height: 50px;
  accent-color: green;
`;

export default FollowSafetyRuleCheck;
