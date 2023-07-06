import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { StudentCheckListProps } from "../../models/List";

const CheckList = ({ date, state }: StudentCheckListProps) => {
  const navigate = useNavigate();

  return (
    <>
      <ListBox onClick={() => navigate("/readSafetyChecklist")}>
        <DateT>{date}</DateT>
        <StateBox>{state}</StateBox>
      </ListBox>
    </>
  );
};

const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  border-radius: 15px;
  border: 1px solid #d3d3d3;
  background: #fff;
  margin-bottom: 15px;
  align-items: center;
  padding: 25px 40px;
`;

const DateT = styled.div`
  color: #505050;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
`;

const StateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eb4747;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export default CheckList;
