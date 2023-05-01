import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Signup/Signup'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Cart from '../cart'
import Bedding from '../ProductList/Sofa/Bedding'
import Wishlist from '../wishlist'
import Payment from '../Payment/Payment'
import PrivateRoutes from './PrivateRoutes'
import BeddingSingle from '../ProductList/Sofa/BeddingSingle'
import Sofa from '../ProductList/Sofa/Sofa'
function Allroutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/sign-in' element={<Login />}></Route>
                <Route path='/cart' element={<PrivateRoutes><Cart /></PrivateRoutes>}></Route>
                <Route path='/product-page' element={<Sofa />}></Route>
                <Route path='/favourites' element={<PrivateRoutes><Wishlist /></PrivateRoutes>}></Route>
                <Route path='/delivery' element={<PrivateRoutes><Payment /></PrivateRoutes>} />
                <Route path='/favourites' element={<PrivateRoutes><Wishlist /></PrivateRoutes>}></Route>
                <Route path='/BeddingSingle/:id' element={<BeddingSingle />}></Route>
                {/* <Route path='/BeddingSingle/:id' element={<BeddingSingle />}></Route> */}
            </Routes>
        </div >
    )
}

export default Allroutes