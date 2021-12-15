import shippingAddressService from "./shippingAddress-service"
import React from "react";
import {useParams, useNavigate, Link} from 'react-router-dom';
import {Button} from "semantic-ui-react";

const ShippingAddressFormEditor = () => {
    const {useState, useEffect} = React;
    const {aId} = useParams()
    const navigate = useNavigate();
    const [shippingAddress, setShippingAddress] = useState({})
    useEffect(() => {
        if(aId !== "new") {
            findShippingAddressById(aId)
        }
    }, [aId]);
    const findShippingAddressById = (aId) =>
        shippingAddressService.findShippingAddressById(aId)
            .then(shippingAddress => setShippingAddress(shippingAddress));

    const deleteShippingAddress = (aId) =>
        shippingAddressService.deleteShippingAddress(aId)
            .then(() => navigate("/shippingAddresses"))
    const createShippingAddress = (shippingAddress) =>
        shippingAddressService.createShippingAddress(shippingAddress)
            .then(() => navigate("/"))
    const updateShippingAddress = (aId, newShippingAddress) =>
        shippingAddressService.updateShippingAddress(aId, newShippingAddress)
            .then(() => navigate("/shippingAddresses"))
    return (
        <div>
            <h2>Shipping Address Editor</h2>
            <div>
            <label>Address Id: &nbsp; </label>
            <input
                onChange={(e) =>
                    setShippingAddress(shippingAddress =>
                        ({...shippingAddress, aId: e.target.value}))}
                value={shippingAddress.aId}/>
            </div>
            <label>User Id: &nbsp;</label>
            {
                shippingAddress.uId &&
                <input
                    readOnly={true}
                    value={shippingAddress.uId.uId}/>
            }
            {
                aId === "new" &&
                    <input
                        value={shippingAddress.uId}/>
            }
            <br></br>
            <label>Address: &nbsp;</label>
            <input
                onChange={(e) =>
                    setShippingAddress(ShippingAddress =>
                        ({...shippingAddress, address: e.target.value}))}
                value={shippingAddress.address}/>
            <br/>
            <Button onClick={() => {
                navigate("/")}}>
                Cancel
            </Button>
            {aId !== "new" &&
            <Button  onClick={() =>
                deleteShippingAddress(shippingAddress.aId)}>
                Delete
            </Button>}
            { aId !== "new" &&
            <Button  onClick={() => updateShippingAddress(aId, shippingAddress)}>
                Save
            </Button>}
            {aId == "new" &&
            <Button
                onClick={() => createShippingAddress(shippingAddress)}>
                Create
            </Button>}
            <div>
                {
                    shippingAddress.uId &&
                    <Link to={`/users/${shippingAddress.uId.uId}`} className="user list btn">User
                        for this Shipping Address:</Link>
                }
                </div>
        </div>
    )
}

export default ShippingAddressFormEditor