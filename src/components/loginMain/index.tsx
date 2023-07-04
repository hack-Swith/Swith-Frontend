import { styled } from "styled-components";
import { BlueLogo, GoStudentLogin, GoTeacherLogin } from "../../assets/icons";

const LoginMain = () => {
  return (
    <Container>
      <Header>
        <img src={BlueLogo} alt="" />
        <p>swith</p>
      </Header>
      <MainSection>
        <TeacherLoginForm>
          <img src={GoTeacherLogin} alt="" />
          <GoLoginButton>교사 로그인 하러가기</GoLoginButton>
        </TeacherLoginForm>
        <StudentLoginForm>
          <img src={GoStudentLogin} alt="" />
          <GoLoginButton>학생 로그인 하러가기</GoLoginButton>
        </StudentLoginForm>
      </MainSection>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 138px 0 0 0;
  p {
    color: #000;
    font-size: 50px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
  }
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  gap: 100px;
`;

const TeacherLoginForm = styled.div`
  color: #fff;
  width: 500px;
  height: 600px;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  img {
    margin-top: 88px;
  }
`;

const GoLoginButton = styled.button`
  width: 426px;
  height: 68px;
  margin-top: 50px;
  margin-left: 37px;
  border: none;
  border-radius: 15px;
  background: #48baeb;
  color: #fff;
  text-align: center;
  font-size: 25px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
`;

const StudentLoginForm = styled.div`
  color: #fff;
  width: 500px;
  height: 600px;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  img {
    margin-top: 88px;
  }
`;

export default LoginMain;
