import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus"
import { BiMinus } from "@react-icons/all-files/bi/BiMinus"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../Redux/Action/cartAction'
import { ToastContainer, toast } from 'react-toastify'

const Cart = () => {
  const dispatch = useDispatch();
  const [cartdata, setCartdata] = useState(useSelector((el) => {
    return el.cartReducer.cartData

  }) || []);
  // let cartdata = [];

  const getData = (async () => {
    let token = JSON.parse(localStorage.getItem('Token'))

    let data = await axios.post(`https://courageous-elk-boot.cyclic.app/products/cart/view`, {
      token
    })
    if (data.data.length > 0) {
      console.log(data.data)
      // let res = data.data;
      cartAction(data.data, dispatch);
      setCartdata(data.data)
      // cartdata = data.data
    }
  })

  const updateData = async (cartItem) => {
    toast.success('Updating cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    delete cartItem.email;
    let token = JSON.parse(localStorage.getItem('Token'))
    let res = await axios.post(`https://courageous-elk-boot.cyclic.app/products/cart/add`, {
      cartItem,
      token
    })
    cartAction(res.data, dispatch);
    setCartdata(res.data)

    // console.log(res)

  }
  const updateDeleteData = async (cartItem) => {
    toast.success('Updating cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    delete cartItem.email;
    let token = JSON.parse(localStorage.getItem('Token'))
    let res = await axios.post(`https://courageous-elk-boot.cyclic.app/products/cart/remove`, {
      cartItem,
      token
    }, [cartdata])
    cartAction(res.data, dispatch);

    setCartdata(res.data)


  }
  const cartDelete = async (cartItem) => {

    toast.error('Removing Product!', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    delete cartItem.email;
    let token = JSON.parse(localStorage.getItem('Token'))
    let res = await axios.post(`https://courageous-elk-boot.cyclic.app/products/cart/remove-product`, {
      cartItem,
      token
    })
    cartAction(res.data, dispatch);

    setCartdata(res.data)

  }
  useEffect(() => {
    getData();
    getData();
  }, [])

  var Totalprice = 0
  cartdata.map((ele, index) => {
    Totalprice += ele.quantity * ele.salesPrice_numeral
  })
  console.log(Totalprice)
  return (
    <div>
      <div className="cart-container">
        <div className='cart-container-inner col-7'>
          <div className='cartheading'>
            <h1>Shopping bag</h1>
            <h2>...</h2>
          </div>

          <div className="cartdiv">
            {
              cartdata.length > 0 &&
              cartdata.map((ele, index) => {
                return (
                  <div className="cartdivmain">
                    <div className="cartimg">
                      <img src={ele.contextualImageUrl} alt="" />
                      <span>{ele.id}</span>
                    </div>
                    <div className="cartdetails">
                      <div className='cartdetailsinner'>
                        <h4>{ele.name}</h4>
                        <p>{ele.typeName}</p>

                      </div>
                      <h5>{ele.salesPrice_prefix} {ele.salesPrice_numeral}</h5>
                      <div className='cartproduct'>
                        <div className='cartproductbutton'>
                          <button onClick={() => updateData(ele)}><AiOutlinePlus /></button>
                          <button>{ele.quantity}</button>
                          <button disabled={ele.Qty == 1} onClick={() => updateDeleteData(ele)}><BiMinus style={{ color: "#000", fontSize: "22px" }} /></button>
                        </div>
                        <div className='savebutton'>
                          <button onClick={() => cartDelete(ele)}>Remove product</button>
                          <button>Save for later</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
        <div className="order-summary">
          <div>Order summary</div>
          <div className='cartdelivery'>
            <span>Total delivery cost</span>
            <span>This subtotal doesn’t include the delivery cost</span>
          </div>
          <div className='carthr'></div>
          <div className='cartotal'>
            <span>Subtotal</span>
            <h2> ₹ {Totalprice}</h2>
          </div>
          <div className="deliveryEstimate">
            Delivery estimates will be available on the next page.
          </div>
          <div className="viewdelivery">
            <Link to="/delivery"><button> Place your order <span><BsArrowRight /></span></button></Link>
          </div>
          <div className="cartreturnpolicy">
            <span><i className=""></i></span>
            <a href="">Our Return Policy</a>
          </div>
          <div className="cartreturnpolicy">
            <span><i className=""></i></span>
            <a href="">Secure shopping with SSL data encryption</a>
          </div>
        </div>
      </div>
      <div className="bagempty" style={{ display: "none" }}>
        <div className="cartempty">
          <div class="cartemptyinner">
            <h2>Your bag is empty</h2>
            <button type="button" class="" aria-label="Open context menu for shopping bag" data-testid="context_menu">...</button>
          </div>
        </div>
        <div className="cartemptygo">
          <div class="cartemptyinnergo">
            <div>
              <h2>Have an account?</h2>
              <span><a href="">Join or log in</a>for a smoother checkout</span>
            </div>
            <span><i className=""></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
