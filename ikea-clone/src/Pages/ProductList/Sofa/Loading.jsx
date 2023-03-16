import React from 'react'
import './Loading.css'
function Loading() {
    return (
        <div class="spinner-box" style={{ backgroundColor: 'rgb(62 67 13 / 73%)' }} >
            <div class="blue-orbit leo">
            </div>

            <div class="green-orbit leo">
            </div>

            <div class="red-orbit leo">
            </div>

            <div class="white-orbit w1 leo">
            </div><div class="white-orbit w2 leo">
            </div><div class="white-orbit w3 leo">
            </div>
        </div>

    )
}

export default Loading