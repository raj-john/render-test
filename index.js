require('dotenv').config()

const express 			= require('express')
const cors  				= require('cors')
const morgan 				= require('morgan')
const authenticate 	= require('./authenticate')
const sessionId  		= require('./session-key.js')

const app = express()
const port = process.env.PORT || 3001

app.use(cors({ allowedHeaders: 'Content-Type,Authorization' }))
app.use(morgan('tiny'))

app.use(express.json({ limit: '4000kb' }))
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.options('*', cors())
authenticate()

// console.log('KEYs', encrypt())

app.get('/', (req, res) => { res.json('Welcome' + sessionId.get()) })
app.use((req, res) => { res.status(404).json('Not Found') })

app.listen(port, () => console.log('Server started at', port))

// github acess token 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 