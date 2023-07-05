"use client"

import { useState } from "react";
import InputDigitSeries from "@/app/components/input/input-series-digit";
import InputSuggest from "@/app/components/input/input-suggest";

type InputType = "suggest" | "digits";

export default function FormInputStudentID() {
    const [studentID, setStudentID] = useState("");
    const [inputType, setInputType] = useState<InputType>("digits")

    function handleInputChange(value: string) {
        setStudentID(value);
    }

    function handleInputTypeChange() {
        if (inputType === "digits") setInputType("suggest")
        else if (inputType === "suggest") setInputType("digits");
    }

    return (
        <div className="p-5 rounded-xl border-dashed border-yellow-400 border-2 w-full bg-yellow-50 flex flex-col items-center">
            <p className="text-center text-gray-700">Insert your student ID to start</p>

            {
                inputType === "digits"
                    ? <div className="flex mt-5 p-3">
                        <InputDigitSeries num={8} onChange={handleInputChange} />
                    </div>
                    : <div className="my-5 p-3 bg-white rounded-xl shadow-xl w-2/3">
                        <InputSuggest num={8} onChange={handleInputChange} />
                    </div>
            }

            <button
                onClick={handleInputTypeChange}
                className="cursor-pointer outline-none hover:underline text-yellow-600">
                Try another way
            </button>

            <button className={
                "transition-all w-36 py-2 rounded-lg border-[1px] outline-none " +
                "border-yellow-500 mt-5 " +
                (studentID.replace(" ", "").length === 8
                    ? "bg-yellow-400 text-black font-normal hover:shadow-xl hover:-translate-y-1 "
                    : "bg-yellow-100 text-gray-500 font-light ")
            }>
                Continue
            </button>
        </div>
    )
}