const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()
const errorHandler = require('./middleware/errorHandler')

const PORT = process.env.PORT || 5000

const app = express()

// Rate Limiter
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 50
})
app.use(limiter)
app.set('trust proxy', 1)

// Cors
app.use(cors())

// Static folder
app.use(express.static('public'))

// Routes
app.use('/api', require('./routes'))

// errorHandler middleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
