import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { NotFinishStudentListProps } from "../models/List";

const TeacherNotFinishList = ({ name, info }: NotFinishStudentListProps) => {
  const navigate = useNavigate();

  return (
    <>
      <ListBox onClick={() => navigate("/focusConsultationRequest")}>
        <NameT>{name}</NameT>
        <InfoT>{info}</InfoT>
      </ListBox>
    </>
  );
};

const ListBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 474px;
  height: 80px;
  border-radius: 15px;
  border: 2px solid #d3d3d3;
  background-color: #fff;
  align-items: center;
  gap: 140px;
  margin-bottom: 15px;
`;

const NameT = styled.div`
  color: #505050;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
`;

const InfoT = styled.div`
  color: #505050;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const StateT = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eb4747;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export default TeacherNotFinishList;
