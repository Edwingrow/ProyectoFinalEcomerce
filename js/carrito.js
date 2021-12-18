var myModalEl = document.getElementById('exampleModal')
console.log(myModalEl)
myModalEl.addEventListener('hidden.bs.modal', function (event) {
  console.log('hola')
})