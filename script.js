const insert = () => {

    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
    }

}

const appendText = (label = "Default") => {
    let container = document.createElement('div')
    container.setAttribute('class', 'item row')
  
    let checkboxDiv = document.createElement('div')
    checkboxDiv.setAttribute('class', 'col-auto mt-2')

    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'form-check-input')

    let inputDiv = document.createElement('div')
    inputDiv.setAttribute('class', 'col mb-2')

    let input = document.createElement('input')
    input.setAttribute('id', 'idtoremove')
    input.setAttribute('placeholder', label)
    input.setAttribute('class', 'form-control')
  
   
    checkboxDiv.appendChild(checkbox)
    container.appendChild(checkboxDiv)
    inputDiv.appendChild(input)
    container.appendChild(inputDiv)
  
  
    document.querySelector('#display').appendChild(container)
  }
  
  const appendButton = (label = "Default") => {
    let elem = document.createElement('div')
    elem.setAttribute('class', 'item')
  
    let button = document.createElement('button')
    button.setAttribute('class', 'btn btn-primary form-control mt-2')
    button.textContent = label
  
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'checkbox')
  
    elem.appendChild(button)
    elem.appendChild(checkbox)
  
    document.querySelector('#display').appendChild(elem)
  }
  
  const remove = () => {
    let items = document.querySelectorAll('.item')
    for (let i = 0; i < items.length; i++) {
      let item = items[i]
      let checkbox = item.querySelector('input[type="checkbox"]')
      if (checkbox.checked) {
        item.remove()
      }
    }
  }