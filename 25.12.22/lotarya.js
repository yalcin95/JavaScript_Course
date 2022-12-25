let randomSayi = Math.random();
let piyangoSayi = (randomSayi*90)+10;
console.log(`Üretilen ondalıklı sayı ${piyangoSayi}`)
let tamSayi= Math.floor(piyangoSayi)
console.log(`Üretilen tam sayı ${tamSayi}`)
let girilenSayi = parseInt(prompt("Piyango sayısı giriniz"));
let tamSayiOnlar = Math.floor(tamSayi/10)
let tamSayiBirler = tamSayi%10
let tamSayiTersi =parseInt(`${tamSayiBirler}${tamSayiOnlar}`)
let girilenSayiOnlar = Math.floor(girilenSayi/10)
let girilenSayiBirler = girilenSayi%10


if (tamSayi===girilenSayi){
    console.log("Tebrikler 10000 tl kazandınız")
}else if(tamSayiTersi===girilenSayi){
    console.log("Tebrikler 5000 tl kazandınız")
}else if(girilenSayiBirler===tamSayiBirler || girilenSayiOnlar===tamSayiOnlar){
    console.log("Tebrikler 1000 tl kazandınız")
}else{
    console.log("ödül kazanamadınız")
}
