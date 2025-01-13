function jumptoMore(){
    const element = document.getElementById('more');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})