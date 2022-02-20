document.getElementById('selects').addEventListener('click', optionsdown);
document.getElementById('option1').addEventListener('click', jp);
document.getElementById('option2').addEventListener('click', tw);


function optionsdown () {
    if(document.getElementById('option1').style.display === 'none'){
        document.getElementById('option1').style.display = 'block';
        document.getElementById('option2').style.display = 'block';
    }else{
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
    }

}

function jp () {
    document.getElementById('selects').innerHTML = 'JP';
    document.getElementById('option1').style.display = 'none';
    document.getElementById('option2').style.display = 'none';
}
function tw () {
    document.getElementById('selects').innerHTML = 'TW';
    document.getElementById('option1').style.display = 'none';
    document.getElementById('option2').style.display = 'none';
}