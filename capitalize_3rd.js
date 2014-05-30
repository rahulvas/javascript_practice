function capitalize_every_3rd(str){
var newstr = "";
for(var i = 0; i< str.length; i++){
    if(i %3 === 0){
            newstr += str[i].toUpperCase();
            i++
        }
    else {
    	newstr += str[i];
    }
    }
    return newstr;
}

console.log(capitalize_every_3rd('hello world!'));