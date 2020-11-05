import React from 'react'
import CharacterItem from "./CharacterItem"
import Spinner from "../ui/Spinner"

const CharacterGrid = (props) => {
    return (
        props.isLoading ? <Spinner /> : (<section className="cards" >
            {
                props.items.map((item) => (
                    <CharacterItem key={item.char_id} item={item}></CharacterItem>
                ))
            }
        </section>)
    )
}

export default CharacterGrid
