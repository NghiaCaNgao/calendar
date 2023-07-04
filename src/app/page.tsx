"use client"

import Header from "@/app/components/header"
import "animate.css";

import { Kanit } from 'next/font/google'
import { useState } from "react";
import InputDigitSeries from "./components/input/input-series-digit";
import InputSuggest from "./components/input/input-suggest";

const kanit = Kanit({
  subsets: ['vietnamese'],
  weight: ["100", "200", "300", "400", "500", "600"],
})

type InputType = "suggest" | "digits";

export default function Home() {
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
    <main className='min-h-screen bg-white bg-bg-image flex flex-col w-screen overflow-hidden'>
      <Header />

      <div className={
        kanit.className +
        " container mx-auto flex justify-center mt-36"
      }>
        <div className="p-10 bg-white w-fit rounded-3xl border-[1px] border-gray-300 shadow-2xl">
          <h1 className="text-gray-800 text-6xl font-semibold">Make your calendar</h1>
          <p className="text-center text-gray-600 text-lg">Just only using your ID and we'll create the best timetable</p>

          <div className="p-5 rounded-xl border-dashed border-yellow-400 border-2 w-full mt-14 bg-yellow-50 flex flex-col items-center">
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
        </div>
      </div>
    </main>
  )
}
