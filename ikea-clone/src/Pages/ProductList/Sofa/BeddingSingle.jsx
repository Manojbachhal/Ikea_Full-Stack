import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./Bs.css"
function BeddingSingle() {
    const { id } = useParams()
    const dta = useSelector((storedData) => {
        return storedData.productReducer.sofa;
    })
    const data = dta.filter(({ itemNoGlobal }) => {
        return itemNoGlobal === Number(id);
    })
    console.log(data, id)


    return (
        < div style={{ width: '90%' }} className='mx-auto mt-5'  >
            {
                data.map(({ contextualImageUrl, mainImageUrl, name, salesPrice_wholeNumber, salesPrice_prefix, typeName, id }) => {
                    return <div className='d-flex'>
                        <div style={{ width: '50%', transition: '.2s ease-in-out' }}>
                            {/* <img src={mainImageUrl} alt="" id='visible' />
                            <img src={contextualImageUrl} alt="" id='hide' /> */}
                            <img src={mainImageUrl} alt="" style={{ width: '80%', borderRadius: '10px' }} onMouseOver={e => (e.currentTarget.src = contextualImageUrl)} onMouseLeave={e => (e.currentTarget.src = mainImageUrl)} id='temp' />
                        </div>
                        <div style={{ width: '50%', transition: '0.5s' }}>
                            <h5>{name}</h5>
                            <div className='d-flex gap-4' >
                                <h1>{typeName}</h1>
                                <h1> {salesPrice_prefix} {salesPrice_wholeNumber}</h1>
                            </div>
                            <p className='text-danger'>inclusive of all taxes</p>
                            <p className='text-success mt-4'>Free shipping for all orders</p>
                            <p className='fw-bolder mt-4'>AVAILABLE OFFERS</p>
                            <div className='d-flex  my-4 gap-4'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS928i97c7uYqrtEvKs-Gl3HMY5UAfsYHGAw&usqp=CAU" alt=""
                                    style={{
                                        width: '5%',
                                        height: '5%'
                                    }} />
                                <p>Extra 50% off on each discounted product when you buy 2 discounted products (or in multiples of 2), final discounted price will be displayed in the cart. NO COUPON REQUIRED.</p>
                            </div>
                            <button className='bg-black fw-bold border-2 border-warning rounded-pill p-2 px-4 mb-2 text-warning' style={{ letterSpacing: '1px' }}>Add To Cart</button>
                        </div>
                    </div>

                })
            }
            {/* <img src={mainImageUrl} onMouseOver={e => (e.currentTarget.src = contextualImageUrl)} onMouseLeave={e => (e.currentTarget.src = mainImageUrl)} alt={name} id='temp' /> */}
        </div >

        // 

    )
}

export default BeddingSingle