const process = require('process');
const fs = require('fs')
var args = process.argv;
console.log(args)
function toplama (){
    let a = parseInt(args[3])
    let b = parseInt(args[4])
    c = a + b;
    console.log(`Toplam = ${c}`) 
}
function print (){
    for (i = 3;i<args.length;i++){
        process.stdout.write(`${args[i]} `)
    }



}


function file (){
    const path = (`./${args[3]}`)
    if(fs.existsSync(path)){
        console.log("1") 
   }else{
        console.log("0") 
    }


}
eval(`${args[2]}()`)

// if (args[2] == "toplama"){
//     toplama()
// }else if (args[2] == "print"){
//     print()
// }else if(args[2] == "file"){
//     file()
// }else{
//     console.log("Geçersiz komut. Komut listesi:file,toplama,print")
// }


