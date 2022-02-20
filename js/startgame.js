document.getElementById('start').addEventListener('click', startgame);

function startgame () {
    var str = document.getElementById('selects').innerText;
    console.log(str)
    if(str==='JP'){
        document.getElementById('gamediv').innerHTML = "<iframe id='game' src='https://game.mahjongsoul.com/index.html'>"
        document.getElementById('content').style.display = 'none';
    }else if(str==='TW'){
        document.getElementById('gamediv').innerHTML = "<iframe id='game' src='https://game.maj-soul.com/1/'>"
        document.getElementById('content').style.display = 'none';
    }else{
        document.getElementById('errorwindow').style.display = 'block';
        document.getElementById('errormessage').innerText = 'Please Select Game Server';
    }

}