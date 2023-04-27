export function createNewCard(e) {
  e.preventDefault()
  const newObject = new object(e.target)
  return newObject
}

function object(targets) {
  console.log(targets)
  this.name = targets.name.value
  this.releaseDate = targets.date.value
  this.website = targets.website.value
  this.websiteSteam = targets.steam.value
  this.twitter = targets.twitterInput.value
  this.tags = targets.tags.value
  this.imageLink = targets.cardImg.value
  this.edit = false
}
