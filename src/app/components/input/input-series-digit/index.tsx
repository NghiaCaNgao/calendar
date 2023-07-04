"use client"

import InputDigit from "./input-digit";
import { useState } from "react";

interface IProps {
    num: number;
    onChange?: (value: string) => void;
}

export default function InputDigitSeries(props: IProps) {
    const [currentPoint, setCurrentPoint] = useState(0);
    const [digits, setDigits] = useState(new Array(props.num));

    function handleInputChange(value: string, index: number): void {
        const tmp = digits;
        digits[index] = value;    
        
        props.onChange && props.onChange(tmp.join(""));
        setDigits(tmp);
    }

    return (
        <>
            {[...Array(props.num).keys()].map((index: number) =>
            (<InputDigit
                focus={currentPoint === index}
                key={index}
                onDone={() => setCurrentPoint(index === props.num - 1 ? index : index + 1)}
                onBack={() => setCurrentPoint(index === 0 ? index : index - 1)}
                onFocus={() => setCurrentPoint(index)}
                onChange={(value) => handleInputChange(value, index)}
            />)
            )}
        </>
    )
}