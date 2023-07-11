let key = ''

module.exports = {
	get: () => key,
	set: value => { key = value }
}
