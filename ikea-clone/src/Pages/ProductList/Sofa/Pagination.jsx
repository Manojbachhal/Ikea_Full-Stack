import React from 'react'
import './pagination.css'
function Pagination({ page, handle, total }) {
    // console.log(total)
    return (
        <div style={{ display: 'flex' }}>
            <button disabled={page == 1} onClick={() => { handle(page - 1) }} className="custom-btn btn-2">Prev</button>
            <button className="custom-btn btn-6" disabled={true}>{page}</button>
            <button disabled={page == total} onClick={() => { handle(page + 1) }} className="custom-btn btn-2">Next</button>

        </div >
    )
}

export default Pagination