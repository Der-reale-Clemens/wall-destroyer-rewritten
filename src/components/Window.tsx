import { FC, useState } from "react";
import { Modals } from "./Modal";
import { Sidebar } from "./Sidebar";
import { Selector } from "./Selector";
import { useAppSelector } from "../redux/hooks";

export const Window: FC = () => {
   const gameMode = useAppSelector(s => s.appReducer.gameMode)

   return (
   <>
      <Modals/>
     {gameMode === '' ? <Selector/> : <Sidebar/>}
   </>)
}