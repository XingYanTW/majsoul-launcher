document.getElementById('start').addEventListener('click', startgame);

var value = document.getElementById('options').value;

function startgame () {
    document.getElementById('content').style.display = 'none';
    document.getElementById('jpgame').innerHTML = "<embed id='game' type='text/html' src='https://game.mahjongsoul.com/index.html'>"
}