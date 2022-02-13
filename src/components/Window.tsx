import { FC, useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { increaseResource } from "../redux/systemSlice";
import { Sidebar } from "./Sidebar";

export const Window: FC = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(increaseResource(["bricks", 10]))
      const interval = setInterval(() => {
         dispatch(increaseResource(["money", 10]))
      }, 100)
   }, [])


   return (<Sidebar/>)
}