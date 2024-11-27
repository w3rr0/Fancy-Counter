import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({ type, setCount, locked }) {
    const handleClick = (event) => {
        setCount(prev => {
            if (type === "minus") {
                if (prev > 0) {
                    return prev - 1}
                else {
                    return prev}}
            else {
                const newCount = prev + 1
                if (newCount > 8) {
                    return prev}
                else {
                    return newCount}
                }
        })
        event.currentTarget.blur()
    }

    return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
    {type === "minus" ? <MinusIcon className="count-btn-icon"/> : <PlusIcon className="count-btn-icon"/>}
    {/* {type === "minus" && <MinusIcon className="count-btn-icon"/>}
    {type === "plus" && <PlusIcon className="count-btn-icon"/>} */}
</button>)
}