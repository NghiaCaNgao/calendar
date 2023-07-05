import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react"

interface IProps {
    onDone: () => void,
    onBack: () => void,
    onFocus: () => void,
    onChange: (value: string) => void
    focus?: boolean

}

export default function InputDigit(props: IProps) {
    const [value, setValue] = useState("");
    const ref = useRef<HTMLInputElement>(null);

    function handleInputChange(event: FormEvent<HTMLInputElement>) {

        // Just only number or empty string
        if (!event.currentTarget.value.match(/^(\s*|\d+)$/)) return;

        // Auto focus next input
        if (event.currentTarget.value.length === 1) {
            props.onDone && props.onDone();
        }

        props.onChange && props.onChange(event.currentTarget.value);
        setValue(event.currentTarget.value);
    }

    function onFocusHandler() {
        props.onFocus && props.onFocus();
    }

    function onKeyDownHandler(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Backspace" && event.currentTarget.value === value && value === "") {
            props.onBack && props.onBack();
        }
    }


    useEffect(() => {
        if (ref.current && props.focus) ref.current.focus();
    })

    return (
        <div className={
            "w-12 h-12 rounded-xl border-2 border-yellow-500 mx-1 " +
            (value.trim().length === 1 ? "bg-yellow-300" : "bg-transparent")}>
            <input
                ref={ref}
                value={value}
                onChange={handleInputChange}
                onFocus={onFocusHandler}
                onKeyDown={onKeyDownHandler}
                type="text"
                maxLength={1}
                className="w-full h-full bg-transparent text-center outline-none font-bold text-2xl" />
        </div>
    )
}