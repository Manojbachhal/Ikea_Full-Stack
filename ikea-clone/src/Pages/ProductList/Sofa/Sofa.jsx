import React, { useState } from "react";
import axios from 'axios';
import './Sofa1.css'
import Filters from "../Filters/Filters";
import { myStore } from "../../../Redux/Store";
import { useEffect } from "react";
import { thunkActionProductsSofa } from "../../../Redux/Action/productAction";
import { useSelector } from "react-redux";
import Card from "./Card";
import Pagination from "./Pagination";
import Loading from "./Loading";
import { cartAction } from "../../../Redux/Action/cartAction";

function Sofa() {
    const { dispatch, getState } = myStore;
    const [page, setpage] = useState(1);
    const [totalpage, settotal] = useState(0);
    const getData = (async (page) => {


        let data = await axios.get(`http://localhost:4000/products/sofa?page=${page}`)


        settotal(data.data.data.totalPage)
        return data.data.data.data;
    })

    useEffect(() => {
        (async function () {
            let data = await getData(page);
            // getData(page);
            dispatch(thunkActionProductsSofa(dispatch, getState, data))
        })();

    }, [page])


    const handle = (val) => {
        setpage(val)
    }

    const dta = useSelector((storedData) => {
        return storedData.productReducer.sofa;
    })
    const getCartData = (async () => {
        let d = await axios.get(`http://localhost:4000/products/cart/view`)
        cartAction(d.data, dispatch);


    })
    const loading = useSelector((dta) => {
        return dta.productReducer.isLoading;
    });
    getCartData();

    // console.log(dta, 'dta')
    return (loading ? <Loading /> : < div id="product-list" style={{ width: "90%", margin: "auto" }} >

        <Filters getData={getData} page={page} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px" }}>

            {
                dta.map(({ mainImageUrl, contextualImageUrl, name, salesPrice_wholeNumber, salesPrice_prefix, typeName, itemNoGlobal }) => {
                    return (
                        // <ItemBox elem={elem} key={index + 1} />
                        <Card id={itemNoGlobal} contextualImageUrl={contextualImageUrl} mainImageUrl={mainImageUrl} name={name} salesPrice_prefix={salesPrice_prefix} typeName={typeName} salesPrice_wholeNumber={salesPrice_wholeNumber} />
                    )
                })
            }

        </div>

        <Pagination page={page} total={Math.round(totalpage / 10)} handle={handle} />
    </div >
    )
}




export default Sofa;