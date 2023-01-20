import { FC } from "react";
import { Modals } from "./Modal";
import { Sidebar } from "./Sidebar";

export const Window: FC = () => {
   return (
   <>
        <Modals/>
        <Sidebar/>
   </>)
}