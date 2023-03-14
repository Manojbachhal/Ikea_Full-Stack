import React from 'react'
import './Card.css'
function Card({ contextualImageUrl, mainImageUrl, name, salesPrice_wholeNumber, salesPrice_prefix, typeName }) {
    return (
        <div>

            <figure class="snip1418" ><img src={mainImageUrl} onMouseOver={e => (e.currentTarget.src = contextualImageUrl)} onMouseLeave={e => (e.currentTarget.src = mainImageUrl)} alt={name} id='temp' />
                <figcaption>
                    <h3>{name}</h3>
                    <p>{typeName}</p>
                </figcaption>
                <div class="price" style={{ padding: '0px 20px 10px 20px' }}>
                    {salesPrice_prefix} {salesPrice_wholeNumber}
                </div>
                <div className="add-to-cart"> <button class="custom-btn btn-1"><span>Add to Cart</span></button></div>
            </figure>

        </div>
    )
}

export default Card