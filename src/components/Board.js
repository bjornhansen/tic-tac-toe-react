import Cell from "@/components/Cell";

export default function Board({ board, handleClick }) {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <Cell number={0} value={board[0]} handleClick={handleClick}></Cell>
                <Cell number={1} value={board[1]} handleClick={handleClick}></Cell>
                <Cell number={2} value={board[2]} handleClick={handleClick}></Cell>
            </div>
            <div className="flex">
                <Cell number={3} value={board[3]} handleClick={handleClick}></Cell>
                <Cell number={4} value={board[4]} handleClick={handleClick}></Cell>
                <Cell number={5} value={board[5]} handleClick={handleClick}></Cell>
            </div>
            <div className="flex">
                <Cell number={6} value={board[6]} handleClick={handleClick}></Cell>
                <Cell number={7} value={board[7]} handleClick={handleClick}></Cell>
                <Cell number={8} value={board[8]} handleClick={handleClick}></Cell>
            </div>
        </div>
    )
}