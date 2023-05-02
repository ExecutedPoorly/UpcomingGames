export function createNewCard(e, selectedTags) {
  e.preventDefault()
  let stringy = ''
  selectedTags.forEach((tag) => {
    stringy === '' ? (stringy += tag.value) : (stringy += ' ' + tag.value)
  })
  console.log(stringy, 'no')
  const newObject = new object(e.target, stringy)
  return newObject
}

function object(targets, stringy) {
  console.log(targets, stringy, 'aah')
  this.name = targets.name.value
  this.releaseDate = targets.date.value
  this.website = targets.website.value
  this.websiteSteam = targets.steam.value
  this.twitter = targets.twitterInput.value
  this.tags = stringy
  this.imageLink = targets.cardImg.value
  this.edit = false
}
