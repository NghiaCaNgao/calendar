"use client"

import Header from "@/app/components/header"
import "animate.css";

import { Kanit } from 'next/font/google'
import { useState } from "react";
import InputDigitSeries from "./components/input/input-series-digit";

const kanit = Kanit({
  subsets: ['vietnamese'],
  weight: ["100", "200", "300", "400", "500", "600"],
})

export default function Home() {
  const [studentID, setStudentID] = useState("");
  function handleInputChange(value: string) {
    setStudentID(value);
    console.log(value);
    
  }

  return (
    <main className='min-h-screen bg-white bg-bg-image flex flex-col'>
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
            <div className="flex mt-5 p-3">
              <InputDigitSeries num={8} onChange={handleInputChange} />
            </div>
            <button className="cursor-pointer outline-none hover:underline text-yellow-600">Try other ways</button>
            <button className="bg-yellow-100 text-gray-400 hover:bg-yellow-400 hover:text-black transition-all w-36 py-2 rounded-lg shadow-lg border-[1px] outline-none border-yellow-500 mt-5">Continue</button>
          </div>
        </div>
      </div>
    </main>
  )
}
