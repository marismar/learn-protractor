const faker = require('faker')
const helper = require('protractor-helper')

const Destination = require('../page-objects/destination')
const DestinationEdit = require('../page-objects/destination-edit')

describe("Given I'm at a random edit destination page", () => {
  let destinationEdit

  beforeEach(() => {
    destinationEdit = new DestinationEdit()
    destinationEdit.visit()
  })

  it('Then I see an image and a form to edit the name and the description', () => {
    helper.waitForElementVisibility(destinationEdit.self.image)
    helper.waitForElementVisibility(destinationEdit.self.image)
    helper.waitForElementVisibility(destinationEdit.self.image)
    helper.waitForElementVisibility(destinationEdit.form.nameLabel)
    helper.waitForElementVisibility(destinationEdit.form.nameInput)
    helper.waitForElementVisibility(destinationEdit.form.descriptionLabel)
    helper.waitForElementVisibility(destinationEdit.form.descriptionInput)
    helper.waitForElementVisibility(destinationEdit.form.updateButton)
  })

  describe('When I submit the form with less than the minimum required characteres', () => {
    beforeEach(() => {
      destinationEdit.form.submitFormAfterClearingAndFillingItWith('Ab', 'Abcdefghi') // prettier-ignore
    })

    it('Then both input fields are wrapped in a .field_with_errors div', () => {
      helper.waitForElementVisibility(destinationEdit.form.nameInputWithError)
      helper.waitForElementVisibility(destinationEdit.form.descriptionInputWithError) // prettier-ignore
    })
  })

  describe('When successfully submitting for the form with a new name and description', () => {
    let destinationUrl

    const randomUuId = faker.datatype.uuid()
    const fiveRandomWords = faker.random.words(5)

    beforeEach(() => {
      browser.getCurrentUrl().then(url => {
        destinationUrl = url.replace('/edit', '')
      })

      destinationEdit.form.submitFormAfterClearingAndFillingItWith(
        randomUuId,
        fiveRandomWords
      )
    })

    it("Then I'm redirected to the destination view page and I see the updated info", () => {
      const destination = new Destination()

      helper.waitForUrlToBeEqualToExpectedUrl(destinationUrl)
      helper.waitForTextToBePresentInElement(destination.self.heading, randomUuId) // prettier-ignore
      helper.waitForTextToBePresentInElement(destination.self.paragraph, fiveRandomWords) // prettier-ignore
    })
  })
})
