'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

type Language = "Vi" | "En";

export interface IContext {
    language: Language
}

const DefaultContextValue: IContext = {
    language: "Vi"
}

export interface IConfigurationContextType{
    config: IContext;
    setConfig: Dispatch<SetStateAction<IContext>>;
}

export const ConfigurationContext = createContext<IConfigurationContextType | null>(null);

export default function ConfigurationProvider({ children }: { children: ReactNode }) {
    const [config, setConfig] = useState<IContext>(DefaultContextValue)
    return (
        <ConfigurationContext.Provider value={{ config, setConfig }}>
            {children}
        </ConfigurationContext.Provider>)
}