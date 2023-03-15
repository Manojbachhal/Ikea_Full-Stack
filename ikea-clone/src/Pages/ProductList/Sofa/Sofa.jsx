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

function Sofa() {
    const { dispatch, getState } = myStore;
    const [page, setpage] = useState(1);
    const [totalpage, settotal] = useState(0);
    const [Data, setData] = useState([]);
    const getData = (async (page) => {
        let data = await axios.get(`http://localhost:4000/products/sofa?page=${page}`)
        // console.log(data.data.data);
        settotal(data.data.data.totalPage)
        setData(data.data.data.data);
        return data.data.data.data;
    })
    useEffect(() => {
        (async function () {
            let data = await getData(page);
            dispatch(thunkActionProductsSofa(dispatch, getState, data))
            console.log("useEffect")
        })();
    }, [page])


    const handle = (val) => {
        setpage(val)
    }

    const dta = useSelector((storedData) => {
        return storedData.productReducer.sofa;
    })
    const loading = useSelector((dta) => {
        return dta.productReducer.isLoading;
    });
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