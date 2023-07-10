require('dotenv').config()

const express 	= require('express')
// const mongoose 	= require('mongoose')
const cors  		= require('cors')
const morgan 		= require('morgan')
// const path 			= require('path')
// const routes  	= require('./route')

const app = express()
// const mongoString = process.env.CONNECT_STRING
const port = process.env.PORT || 3001

app.use(cors({ allowedHeaders: 'Content-Type,Authorization' }))
app.use(morgan('tiny'))

app.use(express.json({ limit: '4000kb' }))
app.use(express.text())
app.use(express.urlencoded({ extended: true }))
// app.use('/public', express.static(path.join(__dirname, 'images')))

// app.use(routes)
app.options('*', cors())

app.get('/', (req, res) => { res.json('Welcome') })
app.use((req, res) => { res.status(404).json('Not Found') })

// mongoose.connect(mongoString).catch(err => {
// 	console.log('Connection fail', err)
// })

// const database = mongoose.connection

// database.on('error', error => console.log('error', error.message))
// database.once('connected', () => console.log('Database Connected'))
// app.use((req, res, next) => {
// 	res.status(500).json('Erreur Server')
// })

app.listen(port, () => console.log('Server started at', port))
