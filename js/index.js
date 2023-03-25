var elForm = document.querySelector('.form')
var elInput = elForm.querySelector('.input')
var elWorksList = document.querySelector('.works-list')
var elWorksNumber = document.querySelector('.works-number')
// -->
var worksList = []
// -->
function worksListFunction(evt) {
  evt.preventDefault()
  var newWorks = {
    id: 1,
    work: elInput.value,
  }
  worksList.push(newWorks)

  elInput.value = null
  elWorksList.innerHTML = null
// -->
  for (i = 0; i < worksList.length; i++) {
    var elDiv = document.createElement('li')
    elDiv.className = 'form-check m-3'

    var elInputCheck = document.createElement('input')
    elInputCheck.className = 'form-check-input'
    elInputCheck.type = 'checkbox'
    elInputCheck.id = 'flexCheckDefault'
    elDiv.appendChild(elInputCheck)

    var elLabel = document.createElement('label')
    elLabel.className = 'form-check-label ps-4 border w-100 rounded bg-white'
    elLabel.for = 'flexCheckChecked'
    elDiv.appendChild(elLabel)
    elLabel.textContent = worksList[i].work

    elWorksList.appendChild(elDiv)

    elWorksNumber.textContent = worksList.length + ` Tasks`
  }
//   -->
}
// -->
elForm.addEventListener('submit', worksListFunction)
