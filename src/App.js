
import './App.css';
import UserListScreen from "./UserListScreen";
import HomeScreen from "./home-screen";
import PassportListScreen from "./passportListScreen";
import ShippingAddressListScreen from "./shippingAddressListScreen";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import React, {Component} from "react";
import UserFormEditor from "./user-editor";
import ShippingAddressFormEditor from "./shippingAdress-editor";
import PassportFormEditor from "./passport-editor";

function App() {
    return (
            <div style={{padding: 10}}>
                <BrowserRouter>
                    <Routes>
                    {<Route path="/" element={<HomeScreen/>}/>}
                        {<Route path="/users" element={<UserListScreen/>}/>}
                        {<Route exact path="/users/:uId" element={<UserFormEditor/>} />}
                    {<Route path="/passports" element={<PassportListScreen/>}/>}
                        {<Route exact path="/passports/:passportNumber" element={<PassportFormEditor/>} />}
                        {<Route path="/shippingAddresses" element={<ShippingAddressListScreen/>}/>}
                    {<Route path="/shippingAddresses/:aId" element={<ShippingAddressFormEditor/>}/>}
                </Routes>
                </BrowserRouter>
            </div>
        );
    }


export default App;

