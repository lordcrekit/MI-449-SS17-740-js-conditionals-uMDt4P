if (Math.random() < 0.5) {
  var years = 10*d20.roll('5d20+10')
} else {
  var years = 10*d20.roll('2d20+3d6+5')
}
var round2 = Math.random()
if (round2 < .1) {
  var unit = 'billion'
} else if (round2 < .3) {
  var unit = 'million'
} else if (round2 < .7) {
  var unit = 'thousand'
} else {
  var unit;
}
document.getElementById("years").textContent =  years + (unit ? ' ' + unit : '');