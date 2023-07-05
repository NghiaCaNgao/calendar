import { Flag1, Gift, Like, Edit4 } from "@/app/components/icon"
import StageItem, { IStageData } from "./stage-item";

interface IProps {
    size: "small" | "medium";
}

export default function Stage(props: IProps) {
    const data_stages: IStageData[] = [
        {
            name: "Collect",
            description: "Connect to server with given student ID to query necessary data",
            icon: Flag1
        },
        {
            name: "Verify",
            description: "Verify all student data is matched with you",
            icon: Like
        },
        {
            name: "Modify",
            description: "Add, update or remove subject events, choose what type of display before creating",
            icon: Edit4
        },
        {
            name: "Finish",
            description: "Connect with Google account to generate events",
            icon: Gift
        },
    ];

    return (
        <div className="relative w-full">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center p-3">
                <div className=" border-t-2 border-gray-200 rounded-full w-full"></div>
            </div>

            <div className={"relative h-full flex justify-between "}>
                {data_stages.map(stage => (
                    <StageItem
                        data={stage}
                        selected={stage.name === "Collect"}
                        size={props.size}
                        key={stage.name}
                    />
                ))}
            </div>
        </div>
    )
}