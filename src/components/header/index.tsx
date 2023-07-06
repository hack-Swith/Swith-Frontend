import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { HeaderLogo } from "../../assets/icons";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderSection>
      <LogoSection>
        <img src={HeaderLogo} alt="" />
        <LogoText onClick={() => navigate("/")}>swith</LogoText>
        <LogoutText onClick={() => navigate("/loginMain")}>로그아웃</LogoutText>
      </LogoSection>
    </HeaderSection>
  );
};

const HeaderSection = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(117, 117, 117, 0.25);
  padding: 25px 341px 25px 232px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoText = styled.div`
  color: #46baeb;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
`;

const LogoutText = styled.div`
  color: #46baeb;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-left: 957px;
`;

export default Header;
