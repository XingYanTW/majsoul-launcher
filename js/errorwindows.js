document.getElementById('closeerror').addEventListener("click", closeerror);

function closeerror () {
    console.log('closeerror')
    document.getElementById('errorwindow').style.display = 'none';
}