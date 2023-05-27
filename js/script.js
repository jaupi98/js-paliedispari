function checkPalindroma(parola){
    let palindroma = parola.split('').reverse().join('');

    console.log(palindroma);
    console.log(parola);

    if(palindroma === parola){
     return true;
    }
    return false;
}




let word = prompt('inserire una parola')

let check =checkPalindroma(word);

if(check){
    console.log('La parola e palindroma' )
}
else{
    console.log('la parola non e palindroma')
}