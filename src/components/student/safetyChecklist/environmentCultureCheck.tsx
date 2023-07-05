import { useState } from "react";
import { styled } from "styled-components";

const EnvironmentCultureCheck: React.FC = () => {
  const [isQuestion1Selected, setIsQuestion1Selected] = useState(false);
  const [isQuestion2Selected, setIsQuestion2Selected] = useState(false);
  const [isQuestion3Selected, setIsQuestion3Selected] = useState(false);
  const [isQuestion4Selected, setIsQuestion4Selected] = useState(false);
  const [isQuestion5Selected, setIsQuestion5Selected] = useState(false);

  const handleQuestion1Change = () => {
    setIsQuestion1Selected(!isQuestion1Selected);
    setIsQuestion2Selected(false);
  };

  const handleQuestion2Change = () => {
    setIsQuestion1Selected(false);
    setIsQuestion2Selected(!isQuestion2Selected);
  };

  const handleQuestion3Change = () => {
    setIsQuestion3Selected(!isQuestion3Selected);
  };

  const handleQuestion4Change = () => {
    setIsQuestion4Selected(!isQuestion4Selected);
  };

  const handleQuestion5Change = () => {
    setIsQuestion5Selected(!isQuestion5Selected);
  };

  return (
    <>
      <Content>
        <QuestionHeader>
          <MainQuestionText>기업 환경 및 문화</MainQuestionText>
          <YesNo>
            <p>아니오</p>
            <p>예</p>
          </YesNo>
        </QuestionHeader>
        <Questions>
          <QuestionText>기업 내부의 업무 분위기는 좋았나요?</QuestionText>
          <YesNoCheckSection>
            <NoCheck
              type="radio"
              checked={!isQuestion1Selected}
              onChange={handleQuestion1Change}
              disabled={isQuestion1Selected && !isQuestion2Selected}
            />
            <YesCheck
              type="radio"
              checked={isQuestion1Selected}
              onChange={handleQuestion1Change}
            />
          </YesNoCheckSection>
        </Questions>
        <Questions>
          <QuestionText>
            직장 내 따돌림을 혹은 폭언/폭행을 당한적이 있나요?
          </QuestionText>
          <YesNoCheckSection>
            <NoCheck
              type="radio"
              checked={!isQuestion2Selected}
              onChange={handleQuestion2Change}
            />
            <YesCheck
              type="radio"
              checked={isQuestion2Selected}
              onChange={handleQuestion2Change}
            />
          </YesNoCheckSection>
        </Questions>
        <Questions>
          <QuestionText>
            따돌림을 목격으로 인해 실습 환경에서 불안하거나 불편했던 적이
            있었나요?
          </QuestionText>
          <YesNoCheckSection>
            <NoCheck
              type="radio"
              checked={!isQuestion3Selected}
              onChange={handleQuestion3Change}
            />
            <YesCheck
              type="radio"
              checked={isQuestion3Selected}
              onChange={handleQuestion3Change}
            />
          </YesNoCheckSection>
        </Questions>
        <Questions>
          <QuestionText>
            직장 상사 또는 동기에게 성희롱 또는 성폭행을 당한적이 있나요?
          </QuestionText>
          <YesNoCheckSection>
            <NoCheck
              type="radio"
              checked={!isQuestion4Selected}
              onChange={handleQuestion4Change}
            />
            <YesCheck
              type="radio"
              checked={isQuestion4Selected}
              onChange={handleQuestion4Change}
            />
          </YesNoCheckSection>
        </Questions>
        <Questions>
          <QuestionText>
            성별, 성적 취향, 외모 등에 대한 불쾌한 발언이나 행동을 경험했나요?
          </QuestionText>
          <YesNoCheckSection>
            <NoCheck
              type="radio"
              checked={!isQuestion5Selected}
              onChange={handleQuestion5Change}
            />
            <YesCheck
              type="radio"
              checked={isQuestion5Selected}
              onChange={handleQuestion5Change}
            />
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

export default EnvironmentCultureCheck;
