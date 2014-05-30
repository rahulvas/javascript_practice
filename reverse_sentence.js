function reverse_sentence(str){
    var strarr = str.split(" ");
    var newstrarr = [];
    for(var i = strarr.length-1; i >= 0; i--){
    	newstrarr.push(strarr[i]);
    }
    return newstrarr.join(" ");
}

console.log(reverse_sentence("Hello World!"));