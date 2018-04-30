// Write your solution in this file!
driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  newDriver = Object.assign({}, driver, {key: value})
  return newDriver
}
