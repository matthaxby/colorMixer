var mix = document.getElementById('mix-color')
var colorOne = document.getElementsByName('color-one')
var colorTwo = document.getElementsByName('color-two')

for (var i=0; i < colorOne.length; i++) {
  colorOne[i].addEventListener('click', function(e) {
    console.log(e.target.dataset.colors.split(','))
  })
}


for (var i=0; i < colorTwo.length; i++) {
  colorTwo[i].addEventListener('click', function(e) {
    console.log(e.target.dataset.colors.split(','))
  })
}
