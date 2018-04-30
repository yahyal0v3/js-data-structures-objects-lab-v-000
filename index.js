// Write your solution in this file!
driver = {name: "Bob"}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key) {
  
}
