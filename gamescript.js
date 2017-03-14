var inventory = document.getElementById('inventory')

function gameover (message) {
  window.confirm(message || 'Rocks fall, party dies')
  window.location.href = './conclusion.html'
}

function awinnerisyou (message) {
  window.confirm(message || 'A winner is you')
  window.location.href = 'conclusion-good.html'
}

function getItem (quantity, item) {
  inventory.innerHTML += '<li>[' + quantity + ']' + item + '</li>'
}

function game () {
  if (!window.confirm('Party enters cave')) { gameover('Party exits cave.'); return }

  if (d20.roll('1d100') <= 1) { gameover(); return } // Look out for falling rocks!

  var water = window.prompt('How many liters of water does the party bring?') || '0'
  if (!water) { gameover(); return }
  water = Number(water.trim())
  getItem(water, 'liter rubbing alchohol')

  var food = window.prompt('How many pounds of fried cheese does the party bring?') || '0'
  food = Number(food.trim())
  getItem(food, 'lb fried cheese')

  if (d20.roll('1d100') <= 1) { gameover(); return } // More rocks! Beware, yee weary traveler!

  var choice = window.prompt('Choose a direction (left|right|straight)') || 'nowhere'
  choice = choice.trim().toLowerCase()

  if (choice == 'left') {
    gameover('Spike trap, party dies'); return
  } else if (choice == 'right') {
    /* Good choice! Continue game. */
  } else if (choice == 'straight') {
    gameover('Sawblade trap, party dies'); return
  } else {
    gameover('Party tries to go ' + choice + ', despite that not being a direction, for ' +
            d20.roll('1d20') + ' days before starving.'); return
  }

  if (food < 20) { gameover('Party starves'); return }
  if (water < 20) { gameover('Party dehydrates, gets delusional, and walks into spike trap.'); return }

  if (food > 50 || water > 50) { gameover('Party dies from carrying too much food and water.'); return }
  awinnerisyou('Party survives.')
}

window.setTimeout(game, 200)
