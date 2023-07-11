require('dotenv').config()
const NodeRSA = require('node-rsa')

module.exports = () => {
	const key 	= new NodeRSA()

	key.importKey({
		n: Buffer.from(process.env.PUBLIC_KEY, 'base64'),
		e: 65537,
	}, 'components-public')

	return key.encrypt(process.env.PRIVATE_KEY, 'base64')
}
