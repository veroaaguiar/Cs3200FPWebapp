const USERS_URL = "http://localhost:1818/api/users"

export const findAllUsers = () =>
    fetch(USERS_URL)
        .then(response => response.json())

export const findUserById = (uId) =>
    fetch(`${USERS_URL}/${uId}`)
        .then(response => response.json())


export const deleteUser = (uId) =>
    fetch(`${USERS_URL}/${uId}`, {
        method: "DELETE"
    })


export const createUser = (uId) =>
{
    debugger;
    return fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(uId),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())
}

export const updateUser = (uId, user) =>
    fetch(`${USERS_URL}/${uId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())



export default {
    findAllUsers,
    findUserById,
    deleteUser,
    createUser,
    updateUser
}
