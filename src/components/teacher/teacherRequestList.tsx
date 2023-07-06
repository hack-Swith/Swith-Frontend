import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { RequestListProps } from "../models/List";

const TeacherRequestList = ({
  reason,
  name,
  Id,
  date,
  state,
}: RequestListProps) => {
  const navigate = useNavigate();

  return (
    <>
      <ListBox onClick={() => navigate("/focusConsultationRequest")}>
        <ReasonT>{reason}</ReasonT>
        <Div>
          <NameT>{name}</NameT>
          <IdT>{Id}</IdT>
          <DateT>{date}</DateT>
          <StateT>{state}</StateT>
        </Div>
      </ListBox>
    </>
  );
};

const ListBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
  border-radius: 15px;
  border: 2px solid #d3d3d3;
  background-color: #fff;
  align-items: center;
  margin-bottom: 15px;
  gap: 5px;
`;

const ReasonT = styled.div`
  color: #505050;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  width: 280px;
`;

const Div = styled.div`
  display: flex;
  gap: 90px;
`;

const NameT = styled.div`
  color: #505050;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const IdT = styled.div`
  color: #505050;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const DateT = styled.div`
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

export default TeacherRequestList;
