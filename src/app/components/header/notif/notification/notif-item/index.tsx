import Icon, { UpArrowSvg } from "@/app/components/icon";

interface IProps {
    new?: boolean
}

export default function NotifItem(props: IProps) {
    return (
        <div
            className={
                "border-[1px] rounded-xl bg-white hover:shadow-lg transition-all h-16 " +
                "flex items-center justify-start my-2 p-2 cursor-pointer " +
                (props.new ? "border-yellow-400 " : "border-gray-200 ")
            }>
            <div className={
                (props.new
                    ? "bg-yellow-400 shadow-xl "
                    : "bg-white") +
                " w-12 h-12 flex-none flex justify-center items-center rounded-lg"
            }>
                <Icon icon={UpArrowSvg} stroke="black" />
            </div>
            <div className="text-left ml-3 p-1 h-full flex-grow overflow-hidden">
                <h3 className={
                    "leading-tight truncate overflow-hidden max-w-full " +
                    (props.new
                        ? "text-gray-700 font-semibold"
                        : "text-gray-400 font-normal")}>
                    New update version: 2.0.0 dfvnd
                </h3>
                <p className="text-sm text-gray-400">Fix some bugs</p>
            </div>
        </div>
    )
}