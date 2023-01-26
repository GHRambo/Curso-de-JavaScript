function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano  = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex [0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'menino.png')
            }else if (idade < 21){
                img.setAttribute('src','jovem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'homenadulto.png')
            }else{
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked){
            gênero ='Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src','menina.png')
            }else if (idade < 21){
                img.setAttribute('src','mulherjovem.png')
            }else if (idade < 50){
                img.setAttribute('src','mulheradulta.png')
            }else{
                img.setAttribute('src','idosa.png')
            }
                
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}