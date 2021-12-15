
const PASSPORTS_URL = "http://localhost:1818/api/passports"

export const findAllPassports = () =>
    fetch(PASSPORTS_URL)
        .then(response => response.json())

export const findPassportById = (passportNumber) =>
{
    debugger;
    return fetch(`${PASSPORTS_URL}/${passportNumber}`)
        .then(response => response.json())
}


export const deletePassport = (passportNumber) =>
    fetch(`${PASSPORTS_URL}/${passportNumber}`, {
        method: "DELETE"
    })

export const createPassport = (passport) =>
    fetch(PASSPORTS_URL, {
        method: 'POST',
        body: JSON.stringify(passport),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updatePassport = (passportNumber, passport) =>
    fetch(`${PASSPORTS_URL}/${passportNumber}`, {
        method: 'PUT',
        body: JSON.stringify(passport),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllPassports,
    findPassportById,
    deletePassport,
    createPassport,
    updatePassport
}