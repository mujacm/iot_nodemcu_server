const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cors
app.use(cors())


//uncomment this if you are using mongoDB
//replace the db string with your mongo uri

//connect to db 

// const db = "yourmongourihere";

// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.log(err))

  //routes
app.use('/api', require('./app/routes/api'))
app.use('/auth', require('./app/routes/auth'))

//start server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})