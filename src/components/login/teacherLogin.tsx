import { styled } from "styled-components";
import { Login, LoginLogo } from "../../assets/icons";

const TeacherLogin = () => {
  return (
    <Container>
      <LoginForm>
        <img src={Login} alt="" />
        <Content>
          <LogoImg src={LoginLogo} />
          <InputSection>
            <p>아이디</p>
            <Input />
            <p>비밀번호</p>
            <Input />
          </InputSection>
          <LoginButton>로그인</LoginButton>
          <CheckSection>
            <CheckText>학생인가요?</CheckText>
            <LinkLoginText>학생 로그인하기</LinkLoginText>
          </CheckSection>
        </Content>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 138px 204px;
`;

const LoginForm = styled.div`
  width: 100%;
  height: 723px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  display: flex;
`;

const Content = styled.div`
  /* display: flex; */
`;

const LogoImg = styled.img`
  padding: 117px 0 0 250px;
`;

const InputSection = styled.div`
  padding: 61px 150px 45px;
  p {
    color: #515865;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

const LoginButton = styled.button`
  width: 358px;
  height: 49px;
  border: none;
  border-radius: 15px;
  background: #48baeb;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-left: 150px;
`;

const Input = styled.input`
  width: 358px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  outline: none;
  background: #fff;
`;

const CheckSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 5px;
`;

const CheckText = styled.div`
  color: #acacac;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

const LinkLoginText = styled.div`
  color: #515865;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
`;

export default TeacherLogin;
