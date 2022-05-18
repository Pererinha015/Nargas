var nargas = false 

function saia() {
    if (nargas == false) {
        console.log('abrindo nao-nargas');
        nargas = true;
        document.getElementById('nao-nargas').style.display = 'flex';
        document.getElementById('talvez-nargas').style.display = 'none';
    } else {
        console.log('fechando nao-nargas');
        nargas = false;
        document.getElementById('nao-nargas').style.display = 'none';
    }
}

var tal = false 

function talvez() {
    if (tal == false) {
        console.log('abrindo talvez-nargas');
        tal = true;
        document.getElementById('talvez-nargas').style.display = 'flex';
        document.getElementById('nao-nargas').style.display = 'none';
    } else {
        console.log('fechando talvez-nargas');
        tal = false;
        document.getElementById('talvez-nargas').style.display = 'none';
    }
}