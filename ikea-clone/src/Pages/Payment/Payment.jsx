import React from 'react';
import './Payment.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { cartAction } from '../../Redux/Action/cartAction';

function Payment(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    function callPrice() {
        var x = document.querySelector("#Payment-Dropdown");

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    }

    // var JobData = JSON.parse(localStorage.getItem("paymentdetails")) || [];

    async function AddData() {
        console.log('test')
        let token = JSON.parse(localStorage.getItem('Token'))
        let res = await axios.post('https://courageous-elk-boot.cyclic.app/products/cart/empty-cart', {
            token
        })
        var check = true;
        cartAction([], dispatch);

        if (check) {
            toast.success('Your order has been placed !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate("/");
        }

    }

    let displayData = useSelector((storeData) => {
        return storeData.cartReducer.cartData
    })
    // console.log("cart Data ", Data);

    let totalAmount = 0;
    // let displayData = [];
    displayData.map((elem) => {
        totalAmount = totalAmount + elem.salesPrice_numeral * elem.quantity
    })



    return (
        <div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <div id="Pay_container">
                <div id="parent_payment_lft">

                    <div id="parent_payment_lft_guest">

                        <h3 style={{ fontWeight: '300', textAlign: 'center', marginBottom: '5%' }}>Shipping Details</h3>

                        <h4 style={{ fontWeight: '300' }}>Email and delivery address</h4>
                        <form>
                            <p style={{ fontWeight: '600' }}>Email address</p>
                            <input id="EnterEmail" type="email" required />
                            <p style={{ fontWeight: '600' }}>Country/Region</p>
                            <select name="Country" id="Choose_Country" style={{ width: "95%", marginBottom: '20px' }}>
                                <option value="">- Select Country -</option>
                                <option value="india">India</option>
                                <option value="qatar">Qatar</option>
                                <option value="bhutan">Bhutan</option>
                                <option value="nepal">Nepal</option>
                                <option value="England">England</option>
                            </select>
                            <p style={{ fontWeight: '600' }}>Full Name</p>
                            <input id="FullName" type="text" required />
                            <p style={{ fontWeight: '600' }}>Zip Code/Postcode</p>
                            <input id="ZipCode" type="text" required />
                            {/* <p style={{ fontWeight: '600' }}>Company name</p>
                            <input id="Compny" type="text" /> */}
                            <p style={{ fontWeight: '600' }}>Address</p>
                            <input id="Addrs" type="text" required />
                            {/* <p style={{ fontWeight: '600' }}>Address 2</p>
                            <input id="Addrs2" type="text" /> */}
                            <p style={{ fontWeight: '600' }}>Apartment/Suite number</p>
                            <input id="Apprt" type="text" />


                            <p style={{ fontWeight: '600' }}>Town/City</p>
                            <input id="Town" type="text" required />

                            {/* <p style={{ fontWeight: '600' }}>Contact Number</p>
                            <input id="ContactNo" type="text" /> */}
                            {/* <div id="parent_quest">
                                <button><Link>Why do we need your number?</Link></button>
                            </div> */}
                        </form>
                    </div>
                    <div id="parent_payment_lft_paymentMethod" >
                        <div>
                            <h4 style={{ fontWeight: '300' }}>Select Payment Method</h4>
                            <div  >
                                <div id="border_select" style={{ padding: "10px" }} >
                                    <h5>Credit/Debit Card</h5>
                                    <div>
                                        <div className='d-flex justify-content-evenly'>

                                            <img src="https://s1.thcdn.com/checkout/resources/images/3c2e42cbf9d0b0df0d3b3bb81aa41d6a.svg"
                                                alt="miss pic" />
                                            <img src="https://s1.thcdn.com/checkout/resources/images/57987be4eb98b4c77644d93d92df80fa.svg"
                                                alt="miss pic" />
                                            <img src="https://s1.thcdn.com/checkout/resources/images/932e82ef072c7df18e91e66b96dfdf5d.svg"
                                                alt="miss pic" />
                                            <img src="https://s1.thcdn.com/checkout/resources/images/6732c0137a7dab50b23daf1337fe2f30.svg"
                                                alt="miss pic" />
                                            <img src="https://s1.thcdn.com/checkout/resources/images/0528692e7541ff3755880b3408793969.svg"
                                                alt="miss pic" />
                                            <img src="https://s1.thcdn.com/checkout/resources/images/8ba3dc816042268141a2205e3bfc3971.svg"
                                                alt="miss pic" />
                                            <img src="https://s1.thcdn.com/checkout/resources/images/248074ffdeeeaeffed9c5db35f35fe45.svg"
                                                alt="miss pic" />
                                        </div>
                                        <p>Card Number</p>
                                        <input id="CardNO" type="text" style={{ width: "97.5%" }} required />

                                        <p>Name on card</p>
                                        <input id="NameonCard" type="text" style={{ width: "97.5%" }} required />
                                        <p>Expiry Date</p>

                                        <div id="expiry">
                                            <select name="Expiry" id="Expiry_Month" style={{ width: "50%" }}>
                                                <option value="">Month</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                            <select name="Expiry" id="Expiry_year" style={{ width: "48%" }}>
                                                <option value="">Year</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                            </select>
                                        </div>
                                        <div>
                                            <br />
                                            <p>Security Code (CV2)</p>
                                            <input type="text" id="security_code" />
                                            <button id="question_btn" style={{ margin: '20px' }}>?</button>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            {/* <div id="PaymentOptionsAn">



                                <button id="Payment-DropdownBtn" onClick={callPrice}>
                                    <h2>Use a different payment method</h2>
                                    <div></div>
                                </button>
                                <div id="Payment-Dropdown">
                                    <button><input type="radio" name="aman" className="selectpaymentmtd" value="Paypal" /> <img
                                        src="https://s1.thcdn.com/checkout/resources/images/6528547f8322e9cf64458725f0a72827.svg" alt="" />

                                    </button>
                                    <button> <input type="radio" name="aman" className="selectpaymentmtd" value="Sezzle" /> <img
                                        src="https://s1.thcdn.com/checkout/resources/images/52c235cfc21b037c320712891df2cffc.svg" alt="" />
                                    </button>
                                    <button> <input type="radio" name="aman" className="selectpaymentmtd" value="ZEP" /> <img
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0My4xIDE2IiB3aWR0aD0iNDMiIGhlaWdodD0iMTYiPgogICAgPHRpdGxlPlppcFBheTwvdGl0bGU+CiAgICA8cGF0aCBmaWxsPSIjQUE4RkZGIiBkPSJNMTQuNjcgNC45MjdsMS4zNDUgMTEuMDMyaDEzLjE1NkwyNy44MjUgNC45MjdIMTQuNjdoMHoiLz4KICAgIDxwYXRoIGZpbGw9IiMxQTA4MjYiIGQ9Ik0xOC40MjMuNzE4Yy44NC43OTQuOTU0IDIuMDQ1LjI1NyAyLjc5Mi0uNjk3Ljc0Ny0xLjk0Mi43MDktMi43ODEtLjA4NS0uODQtLjc5Ny0uOTU1LTIuMDQ2LS4yNTctMi43OTQuNjk3LS43NDYgMS45NDEtLjcwOSAyLjc4MS4wODdoMHoiLz4KICAgIDxwYXRoIGZpbGw9IiMxQTA4MjYiIGQ9Ik00Mi45NTkgOC44OTljLS4zMDMtMi40ODEtMi4yMzctMy45OC00Ljg2My0zLjk3MmgtOC43NDdsMS4zNDQgMTEuMDMxaDMuOTM3bC0uMjY4LTIuMjA1aDQuMTY3YzMuMjc1IDAgNC43NzYtMi4wNiA0LjQzLTQuODUzaDB2LS4wMDF6TTM4LjEgMTAuNjZsLTQuMTIuMDA0LS4zMjMtMi42NDYgNC4xNC4wMDRjLjk3My4wMTMgMS40Ny41NjIgMS41NTIgMS4zMi4wNTMuNDg0LS4xNjggMS4zMTgtMS4yNSAxLjMxOHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMUEwODI2IiBkPSJNLjk2OSAxMi44NzZsLjM3NiAzLjA4M2gxMy4xNDNsLS40MzMtMy41MjhINy45M2wtLjA1Ny0uNDQgNS42NDctMy45NzItLjM3Ny0zLjA5MkgwbC40MjggMy41MzJoNi4xNGwuMDU1LjQ0LTUuNjU0IDMuOTc3aDB6Ii8+Cjwvc3ZnPgo="
                                        alt="" />
                                    </button>
                                    <button> <input type="radio" name="aman" className="selectpaymentmtd" value="GooglePay" /> <img
                                        src="https://s1.thcdn.com/checkout/resources/images/3c5574b5e1fe1470a49f46bc08828ef4.svg" alt="" />
                                    </button>
                                    <button> <input type="radio" name="aman" className="selectpaymentmtd" value="AliPay" /><img
                                        src="https://s1.thcdn.com/checkout/resources/images/61199182e45613b7932d163ec9ad823c.svg" alt="" />
                                    </button>
                                </div>

                            </div> */}
                            <button id="Submit_my_Order" onClick={AddData} type="button" class="btn btn-dark">SUMBIT MY ORDER</button>
                        </div>


                        <div id="termCondition">
                            <p>
                                By placing this order, you are confirming that you agree to our
                                <Link> Terms and Conditions </Link> and
                                <Link> Privacy Policy. </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div id="parent_payment_right">
                    <div className="flexdata">
                        {/* <!--  1st div     --> */}
                        <div>Order Summary :            </div>
                        <div> <span id="itemsspan" style={{ fontSize: "15px", marginLeft: "20px" }}>  {displayData.length}</span> Items</div>
                    </div>

                    <div className="flexdata">Order Number  :  <span id="orderNumber" style={{ fontSize: "15px", marginLeft: "20px" }}>4946663456</span> </div>
                    {/* <div className="horizontal_lines"></div> */}
                    <div id="cartdatainpaymentpage">

                        {displayData.length > 0 &&
                            displayData.map((elem, index) => {

                                return <div style={{ borderTop: "1px solid black" }}>
                                    <img src={elem.mainImageUrl} alt="" />
                                    <div style={{ marginLeft: "20px" }}>
                                        <h6 style={{ fontSize: "18px", marginBottom: "0px" }}>{elem.name}</h6>
                                        <div><b style={{ fontWeight: "540", fontSize: "15px" }}> Quantity :  </b>{elem.qantity}</div>
                                        <div> ₹ <span >{elem.salesPrice_numeral}</span> </div>
                                    </div>

                                </div>

                            })
                        }




                    </div>

                    {/* <!-- <<<<<<<<<<<<<< bottom part of summary >>>>>>>>>>>>>>>>>> --> */}




                    <div className="horizontal_lines"></div>
                    <div id="ammountDiv" className="flexdata">
                        <button>Total to pay</button>
                        <button> ₹ <span id="totalamt" style={{ fontSize: "20px" }} > <b> {totalAmount} </b> </span></button>

                    </div>
                    {/* <!-- <<<<<<<<<<<<<< bottom part of summary >>>>>>>>>>>>>>>>>> --> */}
                </div>
            </div>

        </div >
    );
}

export default Payment;