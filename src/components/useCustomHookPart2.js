import React from 'react'
import Menu from "./refactorToggler-CustomHooks/Menu.js"
import Favorite from "./refactorToggler-CustomHooks/Favorite.js"

export default function useCustomHookPart2() {
    return (
        <div>
            <Menu />
            <hr />
            <Favorite />
        </div>
    )
}
