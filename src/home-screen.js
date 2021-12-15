import {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const navigate = useNavigate();
    const [users, setUsers] =
        useState([]);
    const findAllUsers = () =>
        fetch(
            "http://localhost:1818/api/users")
            .then(res => res.json())
            .then(users => setUsers(users));
    useEffect(findAllUsers, []);
    const findAllPassports = () =>
        fetch(
            "http://localhost:1818/api/passports")
            .then(res => res.json())
            .then(users => setUsers(users));
    useEffect(findAllPassports, []);
    const findAllShippingAddresses = () =>
        fetch(
            "http://localhost:1818/api/shippingAddresses")
            .then(res => res.json())
            .then(users => setUsers(users));
    useEffect(findAllShippingAddresses, []);

    return (
        <>
        <div>
            <h2>Welcome Administrator</h2>
                <button onClick={() => {
                    navigate("/users")}}>
                    Click to view all users
                </button>
        </div>
        <div>
            <button onClick={() => {
                navigate("/passports")}}>
               Click to view all Passports
            </button>
        </div>
            <div>
                <button onClick={() => {
                    navigate("/shippingAddresses")}}>
                    Click to view all Shipping Addresses
                </button>
            </div>
            </>
    )
}
export default HomeScreen;