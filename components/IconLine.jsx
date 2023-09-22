import Icon from "./Icon"

export default function IconLine() {
    return (
        <div className="flex pl-12 pr-12 pt-2 pb-2 w-[auto] mt-[-36px] mb-[-34px] justify-center">
            <div className="flex bg-black z-10 rounded-3xl pl-12 pr-12 pt-3 pb-3">
                <Icon content="insta" />
                <Icon content="face"/>
                <Icon content="yt" />
            </div>
        </div>
    )
}