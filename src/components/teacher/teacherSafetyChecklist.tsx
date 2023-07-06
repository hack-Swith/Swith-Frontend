import { styled } from "styled-components";
import { Bar } from "../../assets/icons";
import Header from "../header";
import TeacherDangerList from "./teacherDangerList";
import TeacherNotFinishList from "./teacherNotFinishList";
import { useNavigate } from "react-router-dom";
import { DangerStudentList, NotFinishStudentList } from "../contance";

const TeacherSafetyChecklist = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Div>
        <img src={Bar} alt="" />
        <div>
          <TitleText>대덕소프트웨어 마이스터고</TitleText>
          <AdditionText>박정애 선생님 안녕하세요.</AdditionText>
        </div>
      </Div>
      <Content>
        <div>
          <ChecklistButton>안전 점검표</ChecklistButton>
          <RequestButton onClick={() => navigate("/teacherRequest")}>
            상담 요청서
          </RequestButton>
          <Line></Line>
        </div>
        <ListSection>
          <div>
            <MiddleHeader>안전 위험 학생</MiddleHeader>
            {DangerStudentList.map((item) => (
              <TeacherDangerList
                name={item.name}
                info={item.info}
                state={item.state}
              />
            ))}
          </div>
          <div>
            <MiddleHeader>완료하지 않은 학생</MiddleHeader>
            {NotFinishStudentList.map((item) => (
              <TeacherNotFinishList name={item.name} info={item.info} />
            ))}
          </div>
        </ListSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  color: #505050;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
`;

const Div = styled.div`
  padding: 46px 361px 0;
  display: flex;
`;

const TitleText = styled.div`
  color: #000;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  margin-top: 30px;
  margin-left: 15px;
`;

const AdditionText = styled.div`
  margin-left: 15px;
  margin-top: 5px;
`;

const Content = styled.div`
  padding: 50px 361px 50px;
  p {
    margin-left: 17px;
    margin-bottom: 5px;
    color: #505050;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
  }
`;

const ChecklistButton = styled.button`
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

const RequestButton = styled.button`
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

const Line = styled.div`
  width: 672px;
  height: 2px;
  background: #d3d3d3;
  margin-left: 316px;
`;

const ListSection = styled.div`
  display: flex;
  padding: 35px 0;
  gap: 40px;
`;

const MiddleHeader = styled.button`
  width: 474px;
  height: 65px;
  border: none;
  border-radius: 15px;
  background: #46baeb;
  color: #fff;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  vertical-align: middle;
  margin-bottom: 35px;
`;

export default TeacherSafetyChecklist;
