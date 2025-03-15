// const{Country,City,State}=require('country-state-city')
const mongoose = require('mongoose')
const Country = require('../Models/country.js')
const State = require('../Models/state.js')
const City = require('../Models/city.js')



const getCountry = async (req, res) => {
    try {
        const countries = await Country.find({});

        res.status(200).json({
            success: true,
            message: "Countries fetched successfully",
            data: countries
        });
    } catch (err) {
        console.error("Error fetching countries:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message
        });
    }
};

const getState = async (req, res) => {
    try {
        const {countries}=req.params ||{}
        console.log("first",countries)
        const state = await State.find({country_id: countries});
        res.status(200).json({
            success: true,
            message: "States fetched successfully",
            data: state
        })
    }catch(err){
        console.error("Error fetching states:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message
        })
    }
 }

const getCity = async (req, res) => {
    try {
        const {state_id} = req.params;
        console.log("****************", req.params)
        const states = await City.find({state_id});
        res.status(200).json({
            success: true,
            message: "Cities fetched successfully",
            data: states
        })
    } catch (err) {
        console.error("Error fetching cities:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message
        })
    }
}

module.exports = { getCountry ,getCity,getState}