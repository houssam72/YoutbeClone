import { Dispatch, SetStateAction } from "react";

export type sideBarDispatch = {
  setSideBar: Dispatch<SetStateAction<boolean>>;
  sideBar: boolean;
};
