const Express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const Routes = require('./Routes/geoRoutes.js')
const app = Express()

function initialization() {
    configCors()
    configParser()
    configDatabase()
    configRoutes()
    conf404ErrorStatus()
}


const configCors = () => {
    app.use(cors())
    // dotenv.config()
}

const configParser = () => {
    app.use(Express.json())
    app.use(Express.urlencoded({ extended: true }))
}

const configDatabase = () => {
    mongoose.connect('mongodb+srv://Geo_Location:%40%2312345@cluster0.raci8.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0').then(() => { console.log("MongoDB connected successfully!") }).catch((err) => { console.log("ERROR", err) })
}
configRoutes = () => {
    app.use('/api/v1', Routes)
    // Get states by country code (e.g., US, IN)
    // app.get('/api/states/:countryCode', (req, res) => {
    //     const { countryCode } = req.params;
    //     // countryCode=countryCode.toUpperCase()
    //     console.log("Country Code:", typeof countryCode);

    //     const states = State.getStatesOfCountry(countryCode.toUpperCase());
    //     if (!states || states?.length == 0) {
    //         return res.status(404).json({ message: "No states found for this country." });
    //     }

    //     const stateNames = states?.map(state => state.name); // Extract state names

    //     console.log("States:", stateNames); // Log all state names
    //     res.json(stateNames); // Send the array of state names
    // });
    // // Get cities by country code and state code (e.g., US-CA, IN-TN)
    // app.get('/api/cities/:countryCode/:stateCode', (req, res) => {
    //     const { countryCode, stateCode } = req.params;
    //     const cities = City.getCitiesOfState(countryCode, stateCode);
    //     res.json(cities);
    // });
}

const conf404ErrorStatus = () => {
    app.use((req, res, next) => {
        res.status(404).json({ message: `Not found ${req?.originalUrl}` })
    }
    )
}

initialization();
module.exports = app
