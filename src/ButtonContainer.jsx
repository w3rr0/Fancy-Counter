import CountButtons from "./CountButton";

export default function ButtonContainer({ setCount, locked }) {
    return <div className="button-container">
        <CountButtons type="minus" locked={locked} setCount={setCount}/>
        <CountButtons type="plus" locked={locked} setCount={setCount}/>
    </div>;
}