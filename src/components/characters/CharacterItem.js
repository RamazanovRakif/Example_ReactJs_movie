import React from 'react'

const CharacterItem = (props) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={props.item.img} alt="" />
                </div>
                <div className="card-back">
                    <h1>{props.item.name}</h1>
                    <ul>
                        <li><strong>Actor Name:</strong>{props.item.portrayed}</li>
                        <li><strong>Nicakname:</strong>{props.item.nickname}</li>
                        <li><strong>Birtday:</strong>{props.item.birtday}</li>
                        <li><strong>Status:</strong>{props.item.status}</li>
                    </ul>
                </div>
            </div>
            {/* {props.item.name} */}
        </div>
    )
}

export default CharacterItem
