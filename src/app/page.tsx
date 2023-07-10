import Header from "@/app/components/header"

import FormInputStudentID from "./components/form-input-studentID";
import Stage from "./components/stage";
import StudentCard from "./components/student-card";

export default function Home() {
  return (
    <main className={'min-h-screen bg-white bg-bg-image  w-screen '}>
      <div className="flex flex-col overflow-hidden w-full h-full">
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

            <div className="mt-1 w-full">
              <FormInputStudentID />
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 w-full flex justify-center">
          <div className="bg-white p-1 px-5 rounded-full w-fit border-[1px] border-gray-300">
            <p className="text-gray-800">
              <a href="https://github.com/NghiaCaNgao" className="text-rose-500 hover:underline">Nghiacangao </a>
              makes with love
            </p>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full z-30 bg-[#E3B4499B] backdrop-blur-xl flex justify-center items-center">
        <StudentCard />
      </div> */}
    </main>
  )
}
