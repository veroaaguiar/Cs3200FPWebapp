import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

const PassportListScreen = () => {
    const [passports, setPassports] =
        useState([]);
    const navigate  = useNavigate()
    const findAllPassports = () =>
        fetch(
            "http://localhost:1818/api/passports")
            .then(res => res.json())
            .then(passports => setPassports(passports));
    useEffect(findAllPassports, []);
    return(
        <div>
        <h2>All Passports</h2>
        <button onClick={() => navigate("/passports/new")}>
        Add Passport
        </button>
        <ul class = "list-group">
            {
                passports.map(passport =>
                    <li className="list-group-item"
                        key={passport.passportNumber}>
                        <Link to={`/passports/${passport.passportNumber}`}>
                            Passport Number: {passport.passportNumber}
                        </Link>
                    </li>
                )
            }
        </ul>
        </div>
    )}
export default PassportListScreen;
