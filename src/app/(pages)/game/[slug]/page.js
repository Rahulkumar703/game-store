import React from 'react'

const Game = async ({ params }) => {

    const slug = await params.slug;

    return (
        <div>{slug}</div>
    )
}

export default Game