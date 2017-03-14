setInterval(function () {
  var eles = document.getElementsByClassName('ft')
  for (var i = 0; i < eles.length; i++) {
    eles[i].style.color = getRandomColor()
  }
}, 500)

function getRandomColor () {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
