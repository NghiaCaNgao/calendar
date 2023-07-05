"use client"

import Header from "@/app/components/header"
import "animate.css";

import { Kanit } from 'next/font/google'
import FormInputStudentID from "./components/form-input-studentID";
import { InfoCircle } from "./components/icon";
import Btn from "@/app/components/btn";
import Stage from "./components/stage";
import { useState } from "react";


const kanit = Kanit({
  subsets: ['vietnamese'],
  weight: ["100", "200", "300", "400", "500", "600"],
})



export default function Home() {
  return (
    <main className={
      kanit.className +
      ' min-h-screen bg-white bg-bg-image flex flex-col w-screen overflow-hidden'}>
      <Header />

      <div className={"container mx-auto flex justify-center mt-36"}>
        <div className="p-10 bg-white w-fit rounded-3xl border-[1px] border-gray-300 shadow-2xl flex flex-col items-center">
          <h1 className="text-gray-800 text-6xl font-semibold">Make your calendar</h1>
          <p className="text-center text-gray-600 text-lg">
            Just only using your ID and we'll create the best timetable
          </p>

          <div className="w-2/3 my-3">
            <Stage size="small" />
          </div>

          <div className="mt-1">
            <FormInputStudentID />
          </div>
        </div>
      </div>
    </main>
  )
}
