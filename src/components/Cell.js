export default function Cell({ number, value, handleClick }) {
    return (
        <div className="border p-2 w-8 h-8" onClick={() => handleClick(number)}>{value}</div>
    )
}