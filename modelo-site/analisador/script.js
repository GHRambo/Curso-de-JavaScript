var num = document.getElementById('fnum')
var flista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n , l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if (isNum(num.value) && !inLista(num.value)){
        window.alert('OK')
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}