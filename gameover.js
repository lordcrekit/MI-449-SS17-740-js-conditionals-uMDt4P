var years = d20.roll('1d2') === 1
  ? 10 * d20.roll('5d20+10')
  : 10 * d20.roll('2d20+3d6+5')

var unit
var round2 = d20.roll('1d20')

if (round2 < 5) {
  unit = 'billion'
} else if (round2 < 11) {
  unit = 'million'
} else if (round2 < 15) {
  unit = 'thousand'
}

document.getElementById('years').textContent = years + (unit ? ' ' + unit : '')
