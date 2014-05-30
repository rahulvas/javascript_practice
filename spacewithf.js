function space_with_f(str){
    var newstr = "";
    for (var i = 0; i < str.length; i++){
        if (str[i]===" "){
            newstr += "f";
            i++;
        };
        newstr += str[i];
    };
    return newstr;
}

function space_with_e(str){
	return str.replaceAll(' ', 'e');
}


console.log(space_with_f('hello world how are you'));
console.log(space_with_e('hello world how are you'));