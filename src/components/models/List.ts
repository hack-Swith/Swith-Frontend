export interface StudentCheckListProps {
  date: string;
  state: string;
}

export interface StudentRequestListProps {
  reason: string;
  date: string;
  state: string;
}

export interface DangerStudentListProps {
  name: string;
  info: string;
  state: string;
}

export interface NotFinishStudentListProps {
  name: string;
  info: string;
}

export interface RequestListProps {
  reason: string;
  name: string;
  Id: string;
  date: string;
  state: string;
}
