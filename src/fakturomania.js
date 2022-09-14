const axios = require('axios')
const RequestError = require('exceptions/RequestException.js')
class Fakturomania {
    constructor(email, password, remember) {
        this._email = email
        this._password = password
        this._remember = remember
        this._axios = axios
        this._axios.defaults.baseURL = 'https://app.fakturomania.pl/api/v1'
        this._axios.defaults.headers.post['Content-Type'] = 'application/json'
        this._axios.post('/session', {
            email: email,
            password: password,
            remember: remember
        }).then(({ data }) => {
            this._axios.defaults.headers.common['Authorization'] = `Bearer ${data.value}`
        }).catch((err) => {
            throw new RequestError('We got problem with authorization request')
        })
    }

    get Invoices()
    {
        return "invoices"
    }
}

module.exports = Fakturomania;