function encrypt(str, n){
  var result ="";

  for( let i = 0; i< str.length; i++) {
    var letterCode = str.charCodeAt(i);
    var shift = letterCode + parseInt(n);
    if(str[i] !==str[i].toLocaleLowerCase) {
    result += (String.fromCharCode(((shift - 97)%26) + 97));
    }
    else{
      result += (String.fromCharCode(((shift - 65)%26) + 65));
    }
  }

  return result;
}

var plaintext = process.argv[2];
var shift = parseInt(process.argv[3]);

var encrypted = encrypt(plaintext,shift);

console.log(encrypted);
