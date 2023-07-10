'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

export interface IContext {
    studentId: string,
    studentName: string,
    DOB: string,
    official_class: string

}

const DefaultContextValue: IContext = {
    studentId: "",
    DOB: "",
    official_class: "",
    studentName: ""
}

export interface IStudentContextType {
    config: IContext;
    setConfig: Dispatch<SetStateAction<IContext>>;
}

export const StudentContext = createContext<IStudentContextType | null>(null);

export default function StudentProvider({ children }: { children: ReactNode }) {
    const [config, setConfig] = useState<IContext>(DefaultContextValue)
    return (
        <StudentContext.Provider value={{ config, setConfig }}>
            {children}
        </StudentContext.Provider>)
}