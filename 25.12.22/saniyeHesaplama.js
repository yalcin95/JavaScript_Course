let saniyeStr =prompt("saniye gir");
let saniye = parseInt(saniyeStr) ;
const dakikaSabiti = 60;
let saniyeKismi= saniye%dakikaSabiti
let dakikaKismi = (saniye - saniyeKismi)/60 
console.log(`${dakikaKismi} dakika ${saniyeKismi} saniye`)