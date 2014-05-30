function space_with_f(str){
    for (i in str){
        if (i===" "){
            str[i] = 'f';
            console.log(i);
            i++;
        }
    }
}

console.log(space_with_f('hello world'));