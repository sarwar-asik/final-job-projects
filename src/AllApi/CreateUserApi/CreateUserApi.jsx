import { ServerApi } from '../MainApi';

const addUser = (user) => {
    fetch(`${ServerApi}/addUsers`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}



export default addUser;