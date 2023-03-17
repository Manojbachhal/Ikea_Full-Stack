import React, { useState } from "react";
import axios from 'axios';
import './Sofa1.css'
import Filters from "../Filters/Filters";
import { myStore } from "../../../Redux/Store";
import { useEffect } from "react";
import { LoadingActionOFF, LoadingActionON, thunkActionProductsSofa } from "../../../Redux/Action/productAction";
import { useSelector } from "react-redux";
import Card from "./Card";
import Pagination from "./Pagination";
import Loading from "./Loading";
import { cartAction } from "../../../Redux/Action/cartAction";

function Sofa() {

    const { dispatch, getState } = myStore;
    const [page, setpage] = useState(1);
    // const [dta, setdta] = useState(
    const [totalpage, settotal] = useState(0);
    const url = ` https://courageous-elk-boot.cyclic.app/products/sofa?page=${page}`;
    const getData = (async (page, url) => {


        let data = await axios.get(url)

        settotal(data.data.data.totalPage)
        // console.log(data.data.data.totalPage)
        return data.data.data.data;
    })

    useEffect(() => {
        (async function () {
            dispatch(LoadingActionON(dispatch));

            let data = await getData(page, url);

            dispatch(thunkActionProductsSofa(dispatch, getState, data))
            dispatch(LoadingActionOFF(dispatch));

        })();

    }, [page])


    const handle = (val) => {
        setpage(val)
    }

    const dta = useSelector((storedData) => {
        return storedData.productReducer.sofa;
    }) || [];
    const getCartData = (async () => {
        let token = JSON.parse(localStorage.getItem('Token'))

        let d = await axios.post(`https://courageous-elk-boot.cyclic.app/products/cart/view`, {
            token
        })
        cartAction(d.data, dispatch);


    })
    const loading = useSelector((dta) => {
        return dta.productReducer.isLoading;
    });
    getCartData();

    // console.log(dta, 'dta')
    return (loading ? <Loading /> : < div id="product-list" style={{ width: "90%", margin: "auto" }} >

        <Filters getData={getData} url={`https://courageous-elk-boot.cyclic.app/products/sofa?page=${page}`} page={page} />

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