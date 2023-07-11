import { useContext } from "react";
import BtnNormal from "../btn-general";
import { IStudentContextType, StudentContext } from "@/app/hooks/student";

interface IProps {
    onCancel?: () => void;
}

export default function StudentCard(props: IProps) {
    const { config, setConfig } = useContext(StudentContext) as IStudentContextType;

    return (
        <div className="bg-white rounded-2xl border-[1px] border-gray-300 p-5 shadow-xl">
            <div className="border-dashed border-2 border-yellow-400 rounded-lg bg-yellow-100 p-5 flex flex-col items-center">
                <div className="w-96">
                    <h1 className="text-yellow-600 text-xl font-semibold text-center">Student Info</h1>
                    <h2 className="text-red-500 text-3xl font-bold text-center">
                        {config.studentName ? config.studentName : "Not Found"}
                    </h2>
                </div>

                {config.studentName
                    ? <div className="mt-9 grid w-5/6 grid-cols-2">
                        <h3 className="text-yellow-600 text-left">StudentID</h3>
                        <p className="text-red-700 text-right font-semibold">{config.studentId}</p>
                        <h3 className="text-yellow-600 text-left">DOB</h3>
                        <p className="text-red-700 text-right font-semibold">{config.DOB}</p>
                        <h3 className="text-yellow-600 text-left">Official class</h3>
                        <p className="text-red-700 text-right font-semibold">{config.officialClass}</p>
                    </div>
                    : undefined}
            </div>
            <div className="flex justify-between items-center mt-4">
                <p className="text-gray-400">
                    Auto skip in <span className="text-gray-500 font-bold">3</span> second(s)
                </p>

                <div className="grid grid-cols-2 gap-2">
                    <BtnNormal title="Cancel" level="secondary" onClick={() => props.onCancel && props.onCancel()} />
                    <BtnNormal title="Continue" />
                </div>
            </div>
        </div>
    )
}