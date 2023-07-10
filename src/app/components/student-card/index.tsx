import BtnNormal from "../btn-general";

export default function StudentCard() {
    return (
        <div className="bg-white rounded-2xl border-[1px] border-gray-300 p-5 shadow-xl">
            <div className="border-dashed border-2 border-yellow-400 rounded-lg bg-yellow-100 p-5 flex flex-col items-center">
                <div className="w-96">
                    <h1 className="text-yellow-600 text-xl font-semibold text-center">Student Info</h1>
                    <h2 className="text-red-500 text-3xl font-bold text-center">Đỗ Tuấn Nghĩa</h2>
                </div>

                <div className="mt-9 grid w-5/6 grid-cols-2">
                    <h3 className="text-yellow-600 text-left">StudentID</h3>
                    <p className="text-red-700 text-right font-semibold">21020365</p>
                    <h3 className="text-yellow-600 text-left">DOB</h3>
                    <p className="text-red-700 text-right font-semibold">19-12-2002</p>
                    <h3 className="text-yellow-600 text-left">Official class</h3>
                    <p className="text-red-700 text-right font-semibold">QH-2021-I/CQ-C-B</p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <p className="text-gray-400">
                    Auto skip in <span className="text-gray-500 font-bold">3</span> second(s)
                </p>

                <div className="grid grid-cols-2 gap-2">
                    <BtnNormal title="Cancel" level="secondary"/>
                    <BtnNormal title="Continue" />
                </div>
            </div>
        </div>
    )
}