var nargas = false 

function saia() {
    if (nargas == false) {
        nargas = true
        document.getElementById('nao-nargas').style.display = 'flex';
    } else {
        nargas = false
        document.getElementById('nao-nargas').style.display = 'none';
    }
}