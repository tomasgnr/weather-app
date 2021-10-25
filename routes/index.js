const url = require('url')
const express = require('express')
const needle = require('needle')
const router = express.Router()
//const apicache = require('apicache')

// Environment Variables
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

// Cache (not working in node17)
// let cache = apicache.middleware
// Add second argument to router.get
// cache('5 minutes'),

router.get('/', async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE, ...req.query
    })
    const apiResponse = await needle('get', `${API_BASE_URL}?${params}`)
    const data = apiResponse.body

    // Log request to the public API (DEV)
    if (process.env.NODE_ENV !== 'production') {
      console.log(`REQUEST: ${API_BASE_URL}?${params}`)
    }

    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
})

module.exports = router
