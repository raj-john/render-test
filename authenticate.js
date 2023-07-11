require('dotenv').config()
const fetch 		= require('cross-fetch')
const encrypt 	= require('./encrypt.js')

module.exports = async () => {
	const headers = {
		"Content-Type": "application/json",
		"Authorization": "Bearer " + encrypt(),
		"Origin": "" + process.env.ORIGIN
	}

	const url = `https://openapi.m-pesa.com/openapi/ipg/
							 v2/vodacomDRC/getSession/`

	const response = await fetch(url, { headers }).catch(console.log)
	const data = await response.json()

	return data.output_SessionID
		? sessionKey.set(data.output_SessionID)
		: console.log('Authentication fail')
}
