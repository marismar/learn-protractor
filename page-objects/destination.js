const HeaderComponent = require('./components/header')
const DestinationComponent = require('./components/destination')

const randomNumber = require('../utils/random-number')

class Destination {
  constructor () {
    this.header = new HeaderComponent()
    this.self = new DestinationComponent()
  }

  visit () {
    browser.get(`/destinations/${randomNumber(15)}`)
  }
}

module.exports = Destination
