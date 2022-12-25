let girilenYil = prompt("Yil giriniz","4100")
if (girilenYil%400 == 0){
console.log("Artik yildir")
}else if (girilenYil%4==0 && girilenYil%100!=0){
    console.log("Artik yildir") 
}
else{
    console.log("Artik Degil")
}