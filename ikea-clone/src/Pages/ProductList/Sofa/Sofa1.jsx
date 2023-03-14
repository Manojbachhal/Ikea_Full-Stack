import React, { useState } from "react";
import axios from 'axios';
import './Sofa1.css'
import Sofadata from './../../../JsonFiles/sofa1.json'
import Filters from "../Filters/Filters";
import ItemBox from "../ItemBox";
import { myStore } from "../../../Redux/Store";
import { useEffect } from "react";
import thunkActionProducts from "../../../Redux/Action/productAction";
import { useSelector } from "react-redux";
import Card from "./Card";
import Pagination from "./Pagination";

function Sofa1() {
    const { dispatch, getState } = myStore;
    const [page, setpage] = useState(1);
    const getData = (async () => {
        let data = await axios.get(`http://localhost:4000/products/bedding?page=${page}`)
        // console.log(data.data.data);
        return data.data.data;
    })
    useEffect(() => {
        (async function () {
            let data = await getData();
            dispatch(thunkActionProducts(dispatch, getState, data))

        })();
    }, [page])

    const handle = (val) => {
        setpage(val)
    }
    const dta = useSelector((storedData) => {
        return storedData.productReducer.bedding;
    })

    return (
        <div id="product-list" style={{ width: "90%", margin: "auto" }} >

            <Filters />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px" }}>

                {
                    dta.map(({ mainImageUrl, contextualImageUrl, name, salesPrice_wholeNumber, salesPrice_prefix, typeName }) => {
                        return (
                            // <ItemBox elem={elem} key={index + 1} />
                            <Card contextualImageUrl={contextualImageUrl} mainImageUrl={mainImageUrl} name={name} salesPrice_prefix={salesPrice_prefix} typeName={typeName} salesPrice_wholeNumber={salesPrice_wholeNumber} />
                        )
                    })
                }
                <Pagination page={page} handle={handle} />

            </div>

        </div>
    )
}

// aman
export default Sofa1;