var agora = new Date
var hora = agora.getHours()

console.log(`Agora são ${hora} horas.`)
if ( hora < 12){
    if (hora < 5){
        console.log('Ainda é cedo! Volte a dormir.')
    }else {
        console.log('Bom Diaa')
    }
}else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
}else{
    console.log('Boa Noite!')
}