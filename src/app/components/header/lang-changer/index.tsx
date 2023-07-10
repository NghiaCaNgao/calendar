"use client"

import Btn from "@/app/components/btn"
import { GlobalSvg } from "@/app/components/icon";
import { ConfigurationContext, IConfigurationContextType } from "@/app/hooks/configuration";
import { useContext } from "react";

export default function LangChanger() {
    const { config, setConfig } = useContext(ConfigurationContext) as IConfigurationContextType

    function handleLanguageChange() {
        setConfig({ language: config.language === "Vi" ? "En" : "Vi" });
    }

    return (
        <>
            <Btn
                onClick={handleLanguageChange}
                icon={GlobalSvg}
                text={config.language}
            />
        </>
    )
}