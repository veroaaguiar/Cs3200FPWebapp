
const SHIPPINGADDRESS_URL = "http://localhost:1818/api/shippingAddresses"

export const findAllShippingAddresses = () =>
    fetch(SHIPPINGADDRESS_URL)
        .then(response => response.json())

export const findShippingAddressById = (aId) => {
    return fetch(`${SHIPPINGADDRESS_URL}/${aId}`)
        .then(response => response.json())
}

export const deleteShippingAddress = (aId) =>
    fetch(`${SHIPPINGADDRESS_URL}/${aId}`, {
        method: "DELETE"
    })

export const createShippingAddress = (aId) =>
    fetch(SHIPPINGADDRESS_URL, {
        method: 'POST',
        body: JSON.stringify(aId),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateShippingAddress = (aId, shippingAddress) =>
    fetch(`${SHIPPINGADDRESS_URL}/${aId}`, {
        method: 'PUT',
        body: JSON.stringify(shippingAddress),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const ShippingAddressCRUD  = {
    findAllShippingAddresses,
    findShippingAddressById,
    deleteShippingAddress,
    createShippingAddress,
    updateShippingAddress
}

export default ShippingAddressCRUD;