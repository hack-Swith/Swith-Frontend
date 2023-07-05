import { useState } from "react";
import { styled } from "styled-components";

const RiskManagementCheck = () => {
  return (
    <>
      <Content>
        <QuestionHeader>
          <MainQuestionText>위험 요소 관리</MainQuestionText>
          <YesNo>
            <p>아니오</p>
            <p>예</p>
          </YesNo>
        </QuestionHeader>
        <Questions>
          <QuestionText>
            작업하는 곳에서 잠재적인 위험 요소가 있었나요?
          </QuestionText>
          <YesNoCheckSection>
            <NoCheck type="radio" />
            <YesCheck type="radio" />
          </YesNoCheckSection>
        </Questions>
        <Questions>
          <QuestionText>작업하는 환경이 불안전하다고 느꼈나요?</QuestionText>
          <YesNoCheckSection>
            <NoCheck type="radio" />
            <YesCheck type="radio" />
          </YesNoCheckSection>
        </Questions>
        <Questions>
          <QuestionText>
            위험 요소에 대한 인식과 관리 방법에 대해 교육을 받았나요?
          </QuestionText>
          <YesNoCheckSection>
            <NoCheck type="radio" />
            <YesCheck type="radio" />
          </YesNoCheckSection>
        </Questions>
        <Questions>
          <QuestionText>
            위험 요소에 대한 예방 조치가 충분히 이루어졌나요?
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

export default RiskManagementCheck;
