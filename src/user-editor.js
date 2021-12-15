import userService from "./user-service"
import { Button } from 'semantic-ui-react'
import React from "react";
import  {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';


const UserFormEditor = () => {
    const {uId} = useParams()
    console.log(uId);
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    useEffect(() => {
        if(uId !== "new") {
            findUserById(uId)
        }
    }, [uId]);
    const findUserById = (uId) =>
        userService.findUserById(uId)
            .then(user => setUser(user))
    const deleteUser = (uId) =>
        userService.deleteUser(uId)
            .then(() => navigate("/users"))
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => navigate("/passports/new"))
    const updateUser = (uId, newUser) =>
        userService.updateUser(uId, newUser)
            .then(() => navigate("/users"))
    const getShippingAddresses = (uId, shippingAddresses) =>
        userService.get
    return (
        <div>
            <h2>User Editor</h2>
            <div>
            <label>User Id: &nbsp;</label>
            <input value={user.uId}
                   onChange={(e) =>
                       setUser({...user, uId: parseInt(e.target.value)})}/><br/>
            </div>
            <div>
            <label>First Name: &nbsp;</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, firstName: e.target.value}))}
                value={user.firstName}/>
            </div>
            <div>
            <label>Last Name: &nbsp;</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, lastName: e.target.value}))}
                value={user.lastName}/>
            </div>
            <div>
            <label> Date of Birth: &nbsp; </label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, dateOfBirth: e.target.value}))}
                value={user.dateOfBirth}/>
            </div>
            <label>Password: </label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, password: e.target.value}))}
                value={user.password}/>
            <br/>
            <label>Email: </label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, email: e.target.value}))}
                value={user.email}/>
            <br/>
            <Button onClick={() => {
                navigate("/")}}>
                Cancel
            </Button>
            {uId !== "new" &&
            <Button  onClick={() =>
                deleteUser(user.uId)}>
                Delete
            </Button>}
            {uId !== "new" &&
            <Button  onClick={() => updateUser(uId,  user)}>
                Save
            </Button>}
            {uId === "new" &&
            <Button
                onClick={() => createUser(user)}>
                Create
            </Button>}
            <div>
            {/*<Link to={`/shippingAddresses/${user.addressId}`} className="user list btn">Shipping Address(es) for this User:</Link>*/}
            </div>
             <Link to={`/passports/${user.passportId}`} className="user list btn">Passport for this User:</Link>
            {/*{JSON.stringify(user)}*/}
        </div>
    )
}

export default UserFormEditor