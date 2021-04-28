const express = require('express')
const path = require('path')
const cors = require('cors')
const PORT = 4000



const app = express()

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({
    extended: false
}))

// app.use(express.static(path.join(__dirname, '../public')))

customers = require('./routes/api/customers')
app.use('/api/customers', customers) 


parkingspots = require('./routes/api/parkingspots')
app.use('/api/parkingspots', parkingspots) 


tarifs = require('./routes/api/tarifs')
app.use('/api/tarifs', tarifs) 


cars = require('./routes/api/cars')
app.use('/api/cars', cars) 

marks = require('./routes/api/marks')
app.use('/api/marks', marks) 

typespots = require('./routes/api/typespots')
app.use('/api/typespots', typespots) 

typepayments = require('./routes/api/typepayments')
app.use('/api/typepayments', typepayments) 

employees = require('./routes/api/employees')
app.use('/api/employees', employees)

registrations = require('./routes/api/registrations')
app.use('/api/registrations', registrations)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});