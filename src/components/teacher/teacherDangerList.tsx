import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { DangerStudentListProps } from "../models/List";

const TeacherDangerList = ({ name, info, state }: DangerStudentListProps) => {
  const navigate = useNavigate();

  return (
    <>
      <ListBox onClick={() => navigate("/readSafetyChecklist")}>
        <NameT>{name}</NameT>
        <Div>
          <InfoT>{info}</InfoT>
          <StateT>{state}</StateT>
        </Div>
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
  gap: 50px;
  margin-bottom: 15px;
`;

const Div = styled.div`
  display: flex;
  gap: 25px;
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

export default TeacherDangerList;
