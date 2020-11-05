import React, { useState } from 'react'

const Search = (props) => {
    const [text, setText] = useState('')
    const inputChangeHandler=(query)=>{
        setText(query)
        props.getQuery(query)
    }
    
    return (
        <section className="search">
            <form>
                <input type="text"
                    className="form-control"
                    placeholder="Axtarın"
                    autoFocus
                    onChange={(e)=>inputChangeHandler(e.target.value)}
                    value={text}
                />
            </form>
        </section>
    )
}

export default Search
