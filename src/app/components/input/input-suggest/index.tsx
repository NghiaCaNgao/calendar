"use client"

import { FormEvent, useState } from "react"

interface IReceivedStudentData {
    studentID: string,
    studentName: string,
    studentNameSearch: string
}

const data: IReceivedStudentData[] = [
    {
        studentID: "21020365",
        studentName: "Do Tuan Nghia",
        studentNameSearch: "do tuan nghia"
    },
    {
        studentID: "19206351",
        studentName: "Cao Tuan Nghia",
        studentNameSearch: "cao tuan nghia"
    },
    {
        studentID: "20206521",
        studentName: "Tran Tuan Nghia",
        studentNameSearch: "tran tuan nghia"
    },
    {
        studentID: "22206521",
        studentName: "Chu Tuan Nghia",
        studentNameSearch: "chu tuan nghia"
    },
]

interface IProps {
    num: number;
    onChange?: (value: string) => void;
}

export default function InputSuggest(props: IProps) {
    const max_name_length = 50;
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState("");
    const [view, setView] = useState<IReceivedStudentData[]>([])

    function applyChange(value: string) {
        const _value = value;
        // do nghia ->.*do.*nghia.*
        const _regexp = new RegExp((" " + _value + " ").replace(/\s{2,}/g, " ").split(" ").join(".*"));
        
        const _view = data.filter((item: IReceivedStudentData) => {
            return (
                item.studentID.lastIndexOf(_value.trim()) >= 0 ||
                item.studentNameSearch.match(_regexp)) &&
                _value.trim() !== ""
        }).slice(0, 3)

        if (_value.match(/^(\s*|\d+)$/)) {
            props.onChange && props.onChange(_value);
        }

        setView(_view);
        setValue(_value);
    }

    function handleInputChange(event: FormEvent<HTMLInputElement>) {
        applyChange(event.currentTarget.value);
    }

    function handleItemClick(item: IReceivedStudentData) {
        applyChange(item.studentID);
    }

    return (
        <>
            <div className={
                " rounded-lg p-2 px-3 border-2 transition-all " +
                (focus
                    ? "bg-yellow-300 border-yellow-600 "
                    : "bg-yellow-100 border-yellow-300 ")

            }>
                <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    maxLength={value.match(/\d+/) ? props.num : max_name_length}
                    className="bg-transparent outline-none w-full" />
            </div>

            <div
                className={
                    " w-full mt-2 px-2 transition-all overflow-hidden ease-in-out "
                }>
                {view.length > 0
                    ? <p className="text-green-400">
                        <span>Matched </span>
                        <span className="font-semibold">
                            {view.length}
                        </span>
                        <span> user(s)</span>
                    </p>
                    : <span className="text-gray-500">No matching</span>}

                {view.map((item: IReceivedStudentData) =>
                (<div
                    key={item.studentID}
                    onClick={() => handleItemClick(item)}
                    className={
                        "flex my-1 p-1 px-2 justify-between hover:bg-blue-50 " +
                        "rounded-lg cursor-pointer transition-all "
                    }>
                    <span className="select-none text-gray-600 font-semibold">
                        {item.studentName}
                    </span>
                    <span className="select-none text-gray-500">
                        {item.studentID}
                    </span>
                </div>)
                )}
            </div>
        </>
    )
}