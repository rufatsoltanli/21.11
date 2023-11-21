import "./index.scss"
import React from 'react'
import Cards from '../Cards'

function Main() {
    return (
        <main>
            <h1>Products</h1>
            <div className="cards">
                <Cards></Cards>
            </div>

        </main>
    )
}

export default Main