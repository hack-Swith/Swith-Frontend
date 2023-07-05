import { styled } from "styled-components";
import Header from "../../header";

const WritingDiary = () => {
  return (
    <Container>
      <Header />
      <TitleText>현상실습 일지 작성</TitleText>
      <Content>
        <p>작업 내용</p>
        <TitleInput placeholder="작업 내용을 작성해주세요." />
        <p>상세 내용</p>
        <MainInput placeholder="내용을 작성해주세요." />
        <EndButton>완료</EndButton>
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
  padding: 52px 361px 120px;
  p {
    margin-left: 17px;
    margin-bottom: 5px;
    color: #505050;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
  }
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

const EndButton = styled.button`
  width: 100%;
  height: 65px;
  border: none;
  border-radius: 15px;
  background: #46baeb;
  color: #fff;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  margin-top: 50px;
`;

export default WritingDiary;
