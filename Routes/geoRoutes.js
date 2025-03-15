const Routes = require('express').Router()
const controller = require('../Controller/GeoController.js')

function initialization() {
    getRequest()
    // postRequest()

}
const getRequest = () => {
    // COuntries
    Routes.get('/', controller.getCountry)
    // State
    Routes.get('/:countries', controller.getState)
    // Cities
    Routes.get('/:countries/:state_id',controller.getCity)
}
initialization()
module.exports = Routes