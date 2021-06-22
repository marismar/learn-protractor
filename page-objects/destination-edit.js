const HeaderComponent = require('./components/header')
const DestinationComponent = require('./components/destination')
const FormComponent = require('./components/form')

const randomNumber = require('../utils/random-number')

class DestinationEdit {
  constructor () {
    this.header = new HeaderComponent()
    this.self = new DestinationComponent()
    this.form = new FormComponent()
  }

  visit () {
    browser.get(`/destinations/${randomNumber(15)}/edit`)
  }
}

module.exports = DestinationEdit
