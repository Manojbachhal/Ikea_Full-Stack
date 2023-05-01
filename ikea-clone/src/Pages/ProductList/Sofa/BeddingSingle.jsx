import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { cartAction } from '../../../Redux/Action/cartAction';
import { LoadingActionOFF, LoadingActionON } from '../../../Redux/Action/productAction';
import { ToastContainer, toast } from 'react-toastify'
import Loading from './Loading'
function BeddingSingle() {
    const dispatch = useDispatch();
    const { id } = useParams()
    const dta = useSelector((storedData) => {
        return storedData.productReducer.sofa;
    })
    let data = dta.filter(({ itemNoGlobal }) => {
        return itemNoGlobal === Number(id);
    })
    if (data.length == 0) {
        data = JSON.parse(localStorage.getItem('singlepage'))
    }
    // console.log(temp)
    // useEffect(() => {

    // })
    console.log(data, id)
    if (data.length === 1) {

        localStorage.setItem('singlepage', JSON.stringify(data))
    }

    const cardAdd = async () => {
        toast.success('Adding to cart!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        let cartItem = data[0];
        // dispatch(LoadingActionON(dispatch));
        let token = JSON.parse(localStorage.getItem('Token'))
        let res = await axios.post(`https://courageous-elk-boot.cyclic.app/products/cart/add`, {
            cartItem,
            token
        })
        dispatch(cartAction(res.data, dispatch))
        // dispatch(LoadingActionOFF(dispatch));

        // console.log(res.data)
    }
    const loading = useSelector((dta) => {
        return dta.productReducer.isLoading;
    });
    return (loading ? <Loading /> :
        <  div style={{ width: '90%' }} className='mx-auto mt-5'  >
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
                            <button className=' fw-bold border-2  rounded-pill p-2 px-4 mb-2 text-light' style={{ letterSpacing: '1px', background: '#0058AB', border: '2px solid black' }} onClick={cardAdd}>Add To Cart</button>
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