import Head from 'next/head';
import Game from "@/components/Game";

export default function Home() {
    return (
        <>
            <Head>
                <title>Tic Tac Toe</title>
                <meta name="description" content="A simple tic-tac-toe game used for learning React"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="p-4">
                <Game></Game>
            </div>
        </>
    )
}