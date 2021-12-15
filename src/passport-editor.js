import passportService from "./passport-service"
import React from "react";
import {Button} from "semantic-ui-react";
import {useParams, useNavigate, Link} from 'react-router-dom';
import {deleteUser} from "./user-service";



const PassportFormEditor = () => {
    const {useState, useEffect} = React;
    const {passportNumber} = useParams()
    const navigate = useNavigate();
    const [passport, setPassport] = useState({})
    useEffect(() => {
        if(passportNumber !== "new") {
            findPassportById(passportNumber)
        }
    }, [passportNumber]);
    const findPassportById = (passportNumber) =>
        passportService.findPassportById(passportNumber)
            .then(passport => setPassport(passport));
    const deletePassport = (passportNumber) =>
        passportService.deletePassport(passportNumber)
            .then(() => navigate("/passports"))
    const createPassport = (passport) =>
        passportService.createPassport(passport)
            .then(() => navigate("/shippingAddresses/new"))
    const updatePassport = (passportNumber, newPassport) =>
        passportService.updatePassport(passportNumber, newPassport)
            .then(() => navigate("/passports"))
    return (
        <div>
            <h2>Passport Editor</h2>
            {/*{JSON.stringify(passport)}*/}
            <div>
            <label>passport Number: &nbsp;</label>
            <input
                onChange={(e) =>
                    setPassport(passport =>
                        ({...passport, passportNumber: parseInt(e.target.value)}))}
                value={passport.passportNumber}/>
            </div>
            <div>
            <label>User Id: &nbsp;</label>
                {
                    passport.uId &&
                    <input
                        readOnly={true}
                        value={passport.uId.uId}/>
                }
                {
                    passportNumber === "new" &&
                    <input
                        value={passport.uId}/>
                }
            </div>
            <div>
            <label>Expiration: &nbsp;</label>
            <input
                onChange={(e) =>
                    setPassport(passport =>
                        ({...passport, expiration: e.target.value}))}
                value={passport.expiration}/>
            </div>
            <div>
            <label>Passport Type</label>
            <input
                onChange={(e) =>
                    setPassport(passport =>
                        ({...passport, passportType: e.target.value}))}
                value={passport.passportType}/>
            </div>
            <Button onClick={() => {
                navigate("/")}}>
                Cancel
            </Button>
            {passportNumber!== "new" &&
            <Button  onClick={() =>
                deletePassport(passport.passportNumber) && deleteUser(passport.uId.uId)}>
                Delete
            </Button>}
            {passportNumber !== "new" &&
            <Button  onClick={() => updatePassport(passportNumber, passport)}>
                Save
            </Button>}
            {passportNumber == "new" &&
            <Button
                onClick={() => createPassport(passport)}>
                Create
            </Button>}
            <div>
                {
                    passport.uId &&
                    <Link to={`/users/${passport.uId.uId}`} className="user list btn">User for this Passport:</Link>
                }
            </div>
        </div>
    )
}

export default PassportFormEditor