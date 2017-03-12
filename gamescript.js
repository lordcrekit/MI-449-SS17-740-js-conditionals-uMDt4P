function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var inventory = document.getElementById('inventory');

function gameover(message) {
    window.confirm(message ? message : 'Rocks fall, party dies')
    window.location.href = "./conclusion.html"
}

function awinnerisyou(message) {
    window.confirm(message ? message : 'A winner is you')
    window.location.href = 'conclusion-good.html'
}

function getItem(quantity, item) {
    inventory.innerHTML += '<li>[' + quantity + ']' + item + '</li>'
}

function game() {
    if(!window.confirm('Party enters cave')) {gameover(); return}

    if (Math.random() < 0.05) {gameover(); return} // Look out for falling rocks!

    var water = window.prompt('How many liters of water does the party bring?')
    if (!water) {gameover(); return}
    water = Number(water.trim())
    getItem(water, 'liter rubbing alchohol');

    var food = window.prompt('How many pounds of fried cheese does the party bring?')
    food = Number(food.trim())
    if (!food) {gameover(); return}
    getItem(food, 'lb fried cheese');

    if (Math.random() < 0.05) {gameover(); return} // More rocks! Beware, yee weary traveler!

    var choice = window.prompt('Choose a direction (left|right|straight)')
    choice = choice.trim()
    if (!choice) { gameover('Party stands idle for ' + d20.roll('1d20') + ' days before starving'); return}
    else if (choice =='left') {gameover('Spike trap, party dies'); return}
    else if (choice == 'right') { /* Good choice! Continue game. */ }
    else if (choice == 'straight') {gameover('Sawblade trap, party dies'); return}
    else { gameover('Party tries to go ' + choice + ', despite that not being a direction, for ' +
        d20.roll('1d20') + ' days before starving.'); return}

    if (food < 20) { gameover('Party starves'); return }
    if (water < 20) { gameover('Party dehydrates, gets delusional, and walks into spike trap.'); return }

    if (food > 50 || water > 50) { gameover('Party dies from carrying too much food and water.'); return }
    awinnerisyou('Party survives.'); return
}

window.setTimeout(game, 200);
