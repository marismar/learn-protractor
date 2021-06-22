const HeaderComponent = require('./components/header')
const DestinationsComponent = require('./components/destinations')

const randomNumber = require('../utils/random-number')

class Tag {
  constructor () {
    this.header = new HeaderComponent()
    this.destinations = new DestinationsComponent()
  }

  visit () {
    browser.get(`/tags/${randomNumber(5)}`)
  }
}

module.exports = Tag
