import { FC, ReactNode } from "react";
import { Flags } from "../../redux/appSlice";
import { useAppSelector } from "../../redux/hooks";
import { UnknownIcon } from "../Icons";

type Props = {
    children: ReactNode,
    flag: Flags,
    hidden?: boolean
}

export const LockedContent:FC<Props> = ({children, flag, hidden}) => {
    const flags = useAppSelector(s => s.appReducer.flags)

    return flags.includes(flag) ? <>
        {children}
    </> : (hidden ? <></> : <UnknownIcon/>)
}